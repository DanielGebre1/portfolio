import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface SubscribeRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: SubscribeRequest = await req.json();

    if (!email || !email.includes("@")) {
      return new Response(
        JSON.stringify({ error: "Valid email is required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("New newsletter subscription:", email);

    // Notify owner about new subscriber
    const ownerEmail = await resend.emails.send({
      from: "Blog Newsletter <onboarding@resend.dev>",
      to: ["danielgebre011@gmail.com"],
      subject: "New Newsletter Subscriber!",
      html: `
        <h2>New Newsletter Subscription</h2>
        <p>A new user has subscribed to your blog newsletter:</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    console.log("Owner notification sent:", ownerEmail);

    // Send welcome email to subscriber
    const welcomeEmail = await resend.emails.send({
      from: "Daniel's Blog <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to the Newsletter!",
      html: `
        <h1>Thanks for subscribing!</h1>
        <p>You've successfully subscribed to my blog newsletter.</p>
        <p>You'll receive updates on new articles about AI, mobile development, blockchain, and engineering.</p>
        <p>Best regards,<br>Daniel Gebre</p>
      `,
    });

    console.log("Welcome email sent:", welcomeEmail);

    return new Response(
      JSON.stringify({ success: true, message: "Subscribed successfully" }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error in newsletter-subscribe function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);

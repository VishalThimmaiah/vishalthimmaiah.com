import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();

		// Validate the request body
		const validatedData = contactFormSchema.parse(body);

		// Here you would typically send an email using Resend or another service
		// For now, we'll just log the data and return success
		console.log("Contact form submission:", validatedData);

		// TODO: Implement email sending with Resend
		// const { data, error } = await resend.emails.send({
		//   from: 'portfolio@vishalthimmaiah.com',
		//   to: 'vishal@vishalthimmaiah.com',
		//   subject: `New Contact Form Submission from ${validatedData.name}`,
		//   html: `
		//     <h2>New Contact Form Submission</h2>
		//     <p><strong>Name:</strong> ${validatedData.name}</p>
		//     <p><strong>Email:</strong> ${validatedData.email}</p>
		//     <p><strong>Message:</strong></p>
		//     <p>${validatedData.message}</p>
		//   `,
		// });

		return NextResponse.json(
			{ message: "Message sent successfully" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Contact form error:", error);

		if (error instanceof Error) {
			return NextResponse.json(
				{ error: "Invalid form data" },
				{ status: 400 }
			);
		}

		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 }
		);
	}
}

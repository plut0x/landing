import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: unknown };
    const email =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

    if (!emailPattern.test(email)) {
      return Response.json(
        { message: "Enter a valid email address." },
        { status: 400 },
      );
    }


    const user = await prisma.user.upsert({
      where: { email },
      create: { email},
      select: { id: true, email: true },
    });

    return Response.json({ user });
  } catch (error) {
    console.error("Waitlist signup failed", error);

    return Response.json(
      { message: "Could not join the waitlist right now." },
      { status: 500 },
    );
  }
}

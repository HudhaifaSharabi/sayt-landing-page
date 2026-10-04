"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "الاسم مطلوب (حرفين على الأقل)"),
  clinic: z.string().min(2, "اسم العيادة مطلوب"),
  whatsapp: z.string().min(8, "رقم الواتساب غير صالح"),
  // honeypot field
  website: z.string().max(0, "Invalid submission").optional(),
});

export async function submitLead(formData: FormData) {
  try {
    const rawData = {
      name: formData.get("name") as string,
      clinic: formData.get("clinic") as string,
      whatsapp: formData.get("whatsapp") as string,
      website: formData.get("website") as string,
    };

    const validatedData = formSchema.parse(rawData);

    if (validatedData.website) {
      // Honeypot caught something
      return { success: false, error: "Bot detected" };
    }

    // In a real app, save to DB or send email here.
    // For now, we simulate success and return data to generate a wa.me link.
    
    // Simulate slight delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Construct WhatsApp message URL
    const message = `مرحباً، أود حجز استشارة مجانية لموقع عيادتي.\n\nالاسم: ${validatedData.name}\nالعيادة: ${validatedData.clinic}\nالواتساب: ${validatedData.whatsapp}`;
    const waNumber = "966500000000"; // TODO: replace with client's actual number
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;

    return { 
      success: true, 
      waUrl 
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.issues[0].message };
    }
    return { success: false, error: "حدث خطأ غير متوقع" };
  }
}

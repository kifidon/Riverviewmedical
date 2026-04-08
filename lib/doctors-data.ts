export type DoctorCategory = "Family Medicine" | "Pediatrics" | "Internal Medicine"

export type Doctor = {
  id: string
  name: string
  specialty: string
  category: DoctorCategory
  languages: string
  bio: string
  takingNewPatients?: boolean
  walkInsWelcome?: boolean
}

export const doctors: Doctor[] = [
  {
    id: "mohamed-el-medhwi",
    name: "Dr. Mohamed El Medhwi",
    specialty: "Family Medicine",
    category: "Family Medicine",
    languages: "English, Arabic",
    bio: "Passionate family medicine practitioner committed to comprehensive care and maintaining long-term relationships with patients and families.",
    takingNewPatients: true,
    walkInsWelcome: true,
  },
  {
    id: "akram-albakosh",
    name: "Dr. Akram Albakosh",
    specialty: "Family Medicine",
    category: "Family Medicine",
    languages: "English, Arabic",
    bio: "Compassionate family medicine practitioner dedicated to comprehensive healthcare and personalized treatment plans for families.",
    takingNewPatients: true,
    walkInsWelcome: true,
  },
  {
    id: "ibrahim-mokhtar-saed",
    name: "Dr. Ibrahim Mokhtar Saed",
    specialty: "Family Medicine",
    category: "Family Medicine",
    languages: "English, Arabic",
    bio: "Experienced in family medicine with expertise in preventive care, acute disease management, and supporting families' health goals.",
    takingNewPatients: true,
    walkInsWelcome: true,
  },
  {
    id: "alfaisal-abdulwanis",
    name: "Dr. Alfaisal Abdulwanis",
    specialty: "Family Medicine",
    category: "Family Medicine",
    languages: "English, Arabic",
    bio: "Dedicated family medicine physician committed to providing comprehensive care for patients of all ages and supporting long-term health relationships with families.",
    walkInsWelcome: true,
  },
  {
    id: "mohamed-ben-hassan",
    name: "Dr. Mohamed Ben Hassan",
    specialty: "Family Medicine",
    category: "Family Medicine",
    languages: "English, Arabic",
    bio: "Expert in family medicine with a focus on preventive care, chronic disease management, and building strong physician-patient relationships.",
    walkInsWelcome: true,
  },
  {
    id: "ahmad-al-rabib",
    name: "Dr. Ahmad Al-Rabib",
    specialty: "Family Medicine",
    category: "Family Medicine",
    languages: "English, Arabic",
    bio: "Compassionate family medicine practitioner dedicated to comprehensive healthcare and personalized treatment plans for families.",
    walkInsWelcome: true,
  },
  {
    id: "ahmed-alsiwe",
    name: "Dr. Ahmed Alsiwe",
    specialty: "Family Medicine",
    category: "Family Medicine",
    languages: "English, Arabic",
    bio: "Experienced family medicine doctor focused on preventive healthcare, health education, and meeting the diverse needs of family medicine.",
    walkInsWelcome: true,
  },
  {
    id: "abdulgasem-shommakhi",
    name: "Dr. Abdulgasem Shommakhi",
    specialty: "Family Medicine",
    category: "Family Medicine",
    languages: "English, Arabic",
    bio: "Experienced family medicine physician dedicated to comprehensive patient care and supporting optimal health outcomes for all family members.",
    walkInsWelcome: true,
  },
  {
    id: "ali-ebaij",
    name: "Dr. Ali Ebaij",
    specialty: "Family Medicine",
    category: "Family Medicine",
    languages: "English, Arabic",
    bio: "Dedicated to delivering quality family medicine with emphasis on preventive care, patient education, and holistic health management.",
    walkInsWelcome: true,
  },
  {
    id: "motaz-khlayef",
    name: "Dr. Motaz Khlayef",
    specialty: "Family Medicine",
    category: "Family Medicine",
    languages: "English, Arabic",
    bio: "Experienced family medicine physician dedicated to comprehensive patient care and providing compassionate healthcare for patients of all ages.",
    walkInsWelcome: true,
  },
  {
    id: "marwan-khalif",
    name: "Dr. Marwan Khalif",
    specialty: "Family Medicine",
    category: "Family Medicine",
    languages: "English, Arabic",
    bio: "Dedicated family medicine practitioner committed to providing quality care, preventive health services, and building long-term relationships with patients.",
    walkInsWelcome: true,
  },
  {
    id: "kamal-darwiche",
    name: "Dr. Kamal Darwiche",
    specialty: "Pediatrician",
    category: "Pediatrics",
    languages: "English, Arabic",
    bio: "Specialized pediatrician providing comprehensive care for children from infancy through adolescence with focus on growth, development, and wellness.",
  },
  {
    id: "rashid-alobaidi",
    name: "Dr. Rashid Alobaidi",
    specialty: "Pediatrician",
    category: "Pediatrics",
    languages: "English, Arabic",
    bio: "MBBS-qualified pediatrician providing specialized pediatric care with expertise in children's health, growth monitoring, and developmental assessments.",
  },
  {
    id: "eiman-losta",
    name: "Dr. Eiman Losta",
    specialty: "Pediatrician",
    category: "Pediatrics",
    languages: "English, Arabic",
    bio: "Specialized pediatrician dedicated to providing comprehensive child healthcare with focus on wellness, development, and family support.",
  },
  {
    id: "mohamed-fathi-dahim",
    name: "Dr. Mohamed Fathi Dahim",
    specialty: "Internal Medicine",
    category: "Internal Medicine",
    languages: "English, Arabic",
    bio: "Experienced internal medicine physician specializing in managing complex medical conditions with comprehensive diagnostic and treatment expertise.",
  },
  {
    id: "mohammad-losta",
    name: "Dr. Mohammad Losta",
    specialty: "Internal Medicine",
    category: "Internal Medicine",
    languages: "English, Arabic",
    bio: "Skilled internal medicine specialist focused on diagnosis and management of acute and chronic medical conditions with patient-centered care.",
  },
  {
    id: "mohamed-khuwledi",
    name: "Dr. Mohamed Khuwledi",
    specialty: "Internal Medicine",
    category: "Internal Medicine",
    languages: "English, Arabic",
    bio: "Dedicated internal medicine physician committed to comprehensive care and effective management of medical conditions in adult patients.",
  },
]

export function doctorInitials(name: string): string {
  const parts = name
    .replace(/^Dr\.?\s*/i, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
  if (parts.length === 0) return "?"
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

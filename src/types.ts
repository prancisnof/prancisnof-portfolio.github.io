export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  image: string;
  github?: string;
  demo?: string;
  stats?: { label: string; value: string }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  description: string;
  date: string;
  category: string;
  image: string;
  verifyUrl?: string;
  idNumber?: string;
  expiry?: string;
}

export interface Course {
  name: string;
  code: string;
}

export interface CourseGroup {
  title: string;
  icon: string;
  courses: Course[];
}

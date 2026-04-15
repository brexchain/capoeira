export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
  content?: string;
}

export interface TrainingSession {
  id: string;
  name: string;
  coach: string;
  time: string;
  duration: string;
  intensity: 'Low' | 'Medium' | 'High' | 'Elite';
  category: 'Erwachsene' | 'Kinder' | 'Musik';
  spots: number;
  price: string;
  imageUrl: string;
  location: string;
  day: string;
  note?: string;
}

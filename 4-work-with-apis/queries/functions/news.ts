import sql from 'better-sqlite3';

interface NewsRow {
  id: number;
  slug: string;
  title: string;
  image: string;
  date: string;
  content: string;
}

interface YearRow {
  year: string;
}

interface MonthRow {
  month: string;
}

const newsDB = sql('./db/data.db');

export async function getAllNews(): Promise<NewsRow[]> {
  const news = newsDB.prepare('SELECT * FROM news').all() as NewsRow[];
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return news;
}

export async function getNewsItem(slug: string): Promise<NewsRow | undefined> {
  const newsItem = newsDB.prepare('SELECT * FROM news WHERE slug = ?').get(slug) as NewsRow | undefined;

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return newsItem;
}

export async function getLatestNews(): Promise<NewsRow[]> {
  const latestNews = newsDB
    .prepare('SELECT * FROM news ORDER BY date DESC LIMIT 3')
    .all() as NewsRow[];
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return latestNews;
}

export async function getAvailableNewsYears(): Promise<string[]> {
  const years = newsDB
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all() as YearRow[];

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return years.map((year) => year.year);
}

export function getAvailableNewsMonths(year: string): string[] {
  return (newsDB
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
    )
    .all(year) as MonthRow[])
    .map((month) => month.month);
}

export async function getNewsForYear(year: string): Promise<NewsRow[]> {
  const news = newsDB
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
    )
    .all(year) as NewsRow[];

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news;
}

export async function getNewsForYearAndMonth(year: string, month: string): Promise<NewsRow[]> {
  const news = newsDB
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
    )
    .all(year, month) as NewsRow[];

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news;
}

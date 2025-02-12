export interface SubPage {
  id: string;
  title: string;
  component: React.ComponentType | null;
}

export interface Page {
  id: number;
  title: string;
  component: React.ComponentType | null;
  subPages?: SubPage[];
} 
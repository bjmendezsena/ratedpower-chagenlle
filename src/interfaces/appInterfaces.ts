export interface CardInterface {
  image: CatImage;
  fact: Fact;
}


export interface Fact{
  id:string;
  fact:string
}

export interface CatImage {
  id:         string;
  created_at: string;
  tags:       string[];
}

type Transformation = {
    id: number;
    icon: string;
    name: string;
    health?: string;
    movement_speed?: string;
  };
  
  type Ability = {
    id: number;
    icon: string;
    name?: string;
    type: string;
    isCollab: boolean;
    description?: string;
    additional_fields?: Record<string, string>;
    transformation_id: number;
  };
  
  type MetaData = {
    platform: string;
    mode: string;
    rank: string;
    appearance_rate: string;
    win_rate: string;
  };
  
  export type Hero = {
    id: string;
    name: string;
    real_name: string;
    transformations: Transformation[];
    en_name: string;
    description: string;
    slug: string;
    team: string;
    difficulty: string;
    attack_type: string;
    role: string;
    image_square: string;
    image_transverse: string;
    icon: string;
    image: string;
    logo_small: string;
    logo: string;
    skins: string[];
    abilities: Ability[];
    meta: MetaData[];
  };
  
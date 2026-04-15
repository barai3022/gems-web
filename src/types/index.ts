export interface StackedAreaChartData {
    time: string;
    pv: number;
    dg: number;
    grid: number;
}

export interface BarChartData {
    title: string;
    pv: number;
    dg: number;
    grid: number;
}

export interface DataObject {
    title: string;
    val: string | number;
    main_class: string;
    ttl_class: string;
    val_class: string;
};

export interface ProjectTitleData {
    title: string;
    capacity: string;
    cod: string;
}

export interface LinkType {
     name: string;
     href: string;
     isMain: boolean;
}

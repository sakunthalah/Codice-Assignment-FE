
export interface ProjectRequestDto {
    data: data
    paginatedInfo:PaginatedInfoDto
  }
  export interface data {
    projectName:string;
    createdBy?:string;
    createdDate?:string;
    startDate?:string;
    endDate?:string;
    budget?:number;
    status?:string;
  }

  export interface PaginatedInfoDto {
    page:string,
    pageSize:string
    }
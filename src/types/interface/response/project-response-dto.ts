export interface ProjectResponse {
    success:string;
    message:string;
    data:ProjectDataResponseDto;
   
  }
  export interface ProjectDataResponseDto {
    data:ProjectDataDto[];
    totalRecords:number;
    currentPage:string;
    totalPages:number;
    pageSize:string;
  }
export interface ProjectDataDto {
    id:number;
    projectname:string;
    createdby:string;
    createddate:string;
    startdate:string;
    enddate:string;
    budget:number;
    status:string;
  }
import React, { useEffect, useState } from "react";
import {
  CdButton,
  CdCard,
  CdContainer,
  CdDateInput,
  CdInputLabel,
  CdSelectInput,
  CdTextInput,
  CdSearchInput,
} from "../../shared-components/atoms";
import {
  Col,
  Row,
  Form,
  FormGroup,
  FormText,
  Label,
  CardTitle,
} from "reactstrap";
import {
  AlignItems,
  JustifyContent,
} from "../../types/enums/components/Container";
import { ProjectStatus } from "../../types/constants/project/project-status";
import { CdDataTable, CdDataGrid } from "../../shared-components/organisms";
import { projectListHeader } from "../../types/constants/project/project-list-headder";
import { projectService } from "../../services/api/ProjectService";
import {
  ProjectRequestDto
} from "../../types/interface/request/project-dto";
import { ProjectDataResponseDto } from "../../types/interface/response/project-response-dto";
import { text } from 'stream/consumers';
import { authService } from "../../services/api/AuthService";
import { UserOption, UserResponseDto } from "../../types/interface/response/user-response-dto";
import { Link } from 'react-router-dom';
import { CdPageTitle } from "../../shared-components/templates";
import { data } from '../../types/interface/request/project-dto';

const SearchProject: React.FC = () => {
  const [projectResponseData, setProjectResponseData] =
    useState<ProjectDataResponseDto | null>(null);
  const [userResponseData, setUserResponseData] =
    useState<UserResponseDto[]>(
    []
    );
  const [projectName, setProjectName] = useState<string>("");
  const [projectStatus, setProjectStatus] = useState<string>(
   
  );
  const [createdBy, setCreatedBy] = useState<string>("");
  const [projCount, setProjCount] = useState<number>(0);
  const [startDate, setStartDate] = useState<string | undefined>(undefined);
  const [endDate, setEndDate] =  useState<string | undefined>(undefined);

  useEffect(() => {
    GetUserData();

    const projObj: ProjectRequestDto = {
      data: {
        projectName: "",
        createdBy:"",
        status:"",
        startDate:"",
        endDate:""
      },
      paginatedInfo: {
        page: "1",
        pageSize: "10",
      },
    };
    GetProjectData(projObj);
   
  }, []);

  const GetProjectData = async (projObj: ProjectRequestDto) => {
    try {
      await projectService.getProjectPaginatedList(projObj).then((res) => {
        if (res.success) {
          setProjectResponseData(res.data);
          setProjCount(res.data.data.length);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const GetUserData = async () => {
    try {
      await authService.getUserDetails().then((res) => {
        if (res.success) {
          console.log(res);
          setUserResponseData(res.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const userOptions: UserOption[] = userResponseData.map((user) => ({
    key: user.id,
    value: user.name,
  }));

  const SearchProjectData = () => {
    const projObj: ProjectRequestDto = {
      data: {
        projectName: projectName,
        status:projectStatus,
        createdBy:createdBy,
        startDate: startDate,
        endDate: endDate,
      },
      paginatedInfo: {
        page: "1",
        pageSize: "10",
      },
    };  
    GetProjectData(projObj);
  };

  
  const SetTableData = (data: any[]) => {
    const tempData: any[] = [];
    data.forEach((project: any) => {
      //tempData.push([...Object.values(item)]);
      tempData.push({
        id: project.id,
        projectName: project.projectName,
        status: project.status,
        startDate: project.startDate,//new Date(project.projectStartDate).toISOString().slice(0, 10),
        endDate: project.endDate,//new Date(project.projectEndDate).toISOString().slice(0, 10),
        createdBy: project.createdBy,
        budget: project.budget
      });
    });
    return tempData;
  };

  return (
    <CdContainer
      justifyContent={JustifyContent.start}
      alignItems={AlignItems.flexStart}
      className="app-container"
    >
      <div style={{ width: "100%" }}>
      <CdPageTitle tiltleText ="All projects" subTiltleText={`displaying ${projCount} projects`}/>
      
        <Row style={{ width: "100%" }}>
          <Col sm={3}>
            <CdInputLabel labelText={"Project Name"} />
          </Col>
          <Col sm={2}>
            <CdInputLabel labelText={"Status"} />
          </Col>
          <Col sm={2}>
            <CdInputLabel labelText={"Created By"} />
          </Col>
          <Col sm={2}>
            <CdInputLabel labelText={"Date From"} />
          </Col>
          <Col sm={2}>
            <CdInputLabel labelText={"Date To"} />
          </Col>
          <Col sm={1}></Col>
        </Row>
        <Row style={{ width: "100%" }}>
          <Col sm={3}>
            <CdSearchInput
              placeHolder="Search for project by Name"
              onChange={(e) => {
                setProjectName(e.target.value);
              }}
              id={""}
            />
          </Col>
          <Col sm={2}>
            <CdSelectInput
              id="projectStatus"
              placeHolder="All"
              options={ProjectStatus}
              onSelect={(_value) => {
                setProjectStatus(_value);
              }}
              defaultChecked=""
            />
          </Col>
          <Col sm={2}>
            <CdSelectInput
              id={"createdBy"}
              placeHolder="All"
              options={userOptions}
              onSelect={(_value) => {
                setCreatedBy(_value);
              }}
            />
          </Col>
          <Col sm={2}>
            <CdDateInput
              id={"dateStart"}
              placeHolder="Start"
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
            />
          </Col>
          <Col sm={2}>
            <CdDateInput
              id={"dateEnd"}
              placeHolder="End"
              onChange={(e) => {
                setEndDate(e.target.value);
              }}
            />
          </Col>
          <Col sm={1}>
            <CdButton
            onClick={() => SearchProjectData()}
            type="button"
            text="Search"
            />
          </Col>
        </Row>
        <Row className="mt-4">
          <CdDataGrid
            columns={[
              {
                field: 'projectName',
                headerName: 'Project Name',
                flex: 1,
                //renderCell: (params) => <Link to={`/permit/update/${params.row.id}`}>{params.value}</Link>,
              },
              { field: 'createdBy', headerName: 'Created By', flex: 1 },
              { field: 'startDate', headerName: 'Start Date', flex: 1 },
              { field: 'endDate', headerName: 'End Date', flex: 1 },
              { field: 'budget', headerName: 'Budget', flex: 1 },
              { field: 'status', headerName: 'Status', flex: 1 },
            ]}
            rows={SetTableData(projectResponseData?.data ?? [])}
            pagination={true}
            pageSizeOptions={[5, 10, 25, 100]}
            initialState={{
              pagination: { paginationModel: { pageSize: 5 } },
            }}
            customNoRowsOverlayDisplayText="No results found for your search"
            useCustomToolbar={true}
          />
        </Row>
        {/* <Row>
          <CdDataTable
            bordered
            hover
            striped
            headers={projectListHeader}
            data={SetTableData(projectResponseData?.data ?? [])}
            //onRowClick={}
            responsive
            small
          />
        </Row> */}
      </div>
    </CdContainer>
  );
};

export default SearchProject;

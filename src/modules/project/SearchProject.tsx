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
  CdSideBar,
} from "../../shared-components/atoms";
import { Col, Row } from "reactstrap";
import {
  ProjectStatus,
  StatusColors,
} from "../../types/constants/project/project-status";
import { CdDataGrid } from "../../shared-components/organisms";
import { projectService } from "../../services/api/ProjectService";
import { ProjectRequestDto } from "../../types/interface/request/project-dto";
import { ProjectDataResponseDto } from "../../types/interface/response/project-response-dto";
import { authService } from "../../services/api/AuthService";
import {
  UserOption,
  UserResponseDto,
} from "../../types/interface/response/user-response-dto";
import { CdPageTemplate } from "../../shared-components/templates";
import { Variant } from "../../types/enums/components/Variant";

const SearchProject: React.FC = () => {
  const [projectResponseData, setProjectResponseData] =
    useState<ProjectDataResponseDto | null>(null);
  const [userResponseData, setUserResponseData] = useState<UserResponseDto[]>(
    []
  );
  const [projectName, setProjectName] = useState<string>("");
  const [projectStatus, setProjectStatus] = useState<string>();
  const [createdBy, setCreatedBy] = useState<string>("");
  const [projCount, setProjCount] = useState<number>(0);
  const [startDate, setStartDate] = useState<string | undefined>(undefined);
  const [endDate, setEndDate] = useState<string | undefined>(undefined);
  const [pageSize, setPageSize] = useState<number>(5);

  useEffect(() => {
    getUserData();
    const projObj: ProjectRequestDto = {
      data: {
        projectName: "",
        createdBy: "",
        status: "",
        startDate: "",
        endDate: "",
      },
      paginatedInfo: {
        page: "1",
        pageSize: pageSize.toString(),
      },
    };
    getProjectData(projObj);
  }, []);

  const getProjectData = async (projObj: ProjectRequestDto) => {
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

  const getUserData = async () => {
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

  const searchProjectData = () => {
    const projObj: ProjectRequestDto = {
      data: {
        projectName: projectName,
        status: projectStatus,
        createdBy: createdBy,
        startDate: startDate,
        endDate: endDate,
      },
      paginatedInfo: {
        page: "1",
        pageSize: pageSize.toString(),
      },
    };
    getProjectData(projObj);
  };

  const setTableData = (data: any[]) => {
    const tempData: any[] = [];
    data.forEach((project: any) => {
      tempData.push({
        id: project.id,
        projectName: project.projectName,
        status: project.status,
        startDate: project.startDate,
        endDate: project.endDate,
        createdBy: project.createdBy,
        budget: project.budget.toLocaleString(),
      });
    });
    return tempData;
  };

  return (
    <CdPageTemplate
      tiltleText={"All projects"}
      subTiltleText={`displaying ${projCount} projects`}
      children={
        <div style={{ width: "100%" }}>
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
                onClick={() => searchProjectData()}
                type="button"
                text="Search"
                color={Variant.info}
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <CdDataGrid
              columns={[
                {
                  field: "projectName",
                  headerName: "Project Name",
                  flex: 1,
                },
                { field: "createdBy", headerName: "Created By", flex: 1 },
                { field: "startDate", headerName: "Start Date", flex: 1 },
                { field: "endDate", headerName: "End Date", flex: 1 },
                {
                  field: "budget",
                  headerName: "Budget",
                  flex: 1,
                  align: "right",
                },
                {
                  field: "status",
                  headerName: "Status",
                  align: "center",
                  flex: 1,
                  renderCell: (params) => (
                    <CdButton
                      color={StatusColors(params.value)}
                      borderradius="4rex"
                      size="sm"
                    >
                      {params.value}
                    </CdButton>
                  ),
                },
              ]}
              rows={setTableData(projectResponseData?.data ?? [])}
              pagination={true}
              pageSizeOptions={[5, 10, 25, 100]}
              initialState={{
                pagination: {
                  paginationModel: { pageSize: pageSize },
                },
              }}
              customNoRowsOverlayDisplayText="No results found for your search"
              useCustomToolbar={true}
            />
          </Row>
        </div>
      }
    ></CdPageTemplate>
  );
};

export default SearchProject;

import React, {useState, useEffect} from "react";
import { CdBarChart, CdCard, CdContainer } from "../../shared-components/atoms";
import { AlignItems, JustifyContent } from "../../types/enums/components/Container";
import { CdPageTitle } from "../../shared-components/templates";
import { Col, Form, Row } from "reactstrap";
import { ProjectDataResponseDto } from "../../types/interface/response/project-response-dto";
import { UserResponseDto } from "../../types/interface/response/user-response-dto";
import { projectService } from "../../services/api/ProjectService";
import { ChartData } from "../../types/types/chart-data";
import CdPieChart from "../../shared-components/atoms/Chart/CdPieChart";



const MpsDashboard: React.FC = () => {
  //const [chartData, setChartData] =useState([]);
  const [projCount, setProjCount] = useState<number>(0);
  const [projectResponseData, setProjectResponseData] =
  useState<ProjectDataResponseDto[]>([]);
const [userResponseData, setUserResponseData] =
  useState<UserResponseDto[]>(
  []
  );
  
  const GetProjectData = async () => {
    try {
      await projectService.getProjectList().then((res) => {
        if (res.success) {
          setProjectResponseData(res.data);
          setProjCount(res.data.length);
          
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetProjectData();
  })

  const SetBarChartData = (data: ProjectDataResponseDto[]) => {
    const tempData: ChartData[] = [];
    data.forEach((project: any) => {
      tempData.push({
        value: project.budget,
        name: project.projectName,
     
      });
    });
    return tempData;
  };

  const SetPieChartData = (data: ProjectDataResponseDto[]) => {
    const tempData: ChartData[] = [];
    data.forEach((project: any) => {
      tempData.push({
        value: project.budget,
        name: project.createdBy
      });
    });
    return tempData;
  };

    return (
        <CdContainer
        justifyContent={JustifyContent.start}
        alignItems={AlignItems.flexStart}
        className="app-container">
             <div style={{ width: "100%" }}>
        <CdPageTitle tiltleText="Overview"></CdPageTitle>
        <div style={{ width: "100%" }}>
      
        <Row style={{ width: "100%" }}>
        <Col lg={4}>

       <CdBarChart data={SetBarChartData(projectResponseData)}></CdBarChart>
        </Col>
        <Col lg={4}>
       <CdPieChart data={SetPieChartData(projectResponseData)}></CdPieChart>
        </Col>
          </Row>
      
          </div>
          </div>
</CdContainer>

    )
};

export default MpsDashboard;
import React, { useState, useEffect } from "react";
import { CdBarChart, CdCard } from "../../shared-components/atoms";
import { JustifyContent } from "../../types/enums/components/Container.Enum";
import { CdPageTemplate } from "../../shared-components/templates";
import { CardBody, CardText, CardTitle, Col, Row } from "reactstrap";
import { ProjectDataResponseDto } from "../../types/interface/response/project-response-dto";
import { projectService } from "../../services/api/ProjectService";
import { ChartData } from "../../types/types/chart-data";

const MpsDashboard: React.FC = () => {
  const [projCount, setProjCount] = useState<number>(0);
  const [projectResponseData, setProjectResponseData] = useState<
    ProjectDataResponseDto[]
  >([]);

  const getProjectData = async () => {
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
    getProjectData();
  }, []);

  const setBarChartData = (data: ProjectDataResponseDto[]) => {
    const tempData: ChartData[] = [];
    data.forEach((project: any) => {
      tempData.push({
        value: project.budget,
        name: project.projectName,
      });
    });
    return tempData;
  };

  return (
    <CdPageTemplate
      tiltleText={"Home"}
      subTiltleText={`Overview`}
      children={
        <div style={{ width: "100%" }}>
          <Row md={12}>
            <Col md={12}>
              <CdCard>
                <div style={{ width: "100%" }}>
                  <Row md={12}>
                    <Col md={6} JustifyContent={JustifyContent.center}>
                      <CardBody>
                        <CardTitle tag="h5">Current Projects</CardTitle>
                        <CardText
                          tag="h3"
                          JustifyContent={JustifyContent.spaceAround}
                        >
                          These projects encompass key initiatives designed to
                          enhance digital transformation, operational
                          efficiency, and user engagement. Each project targets
                          a specific aspect of modern business needs:.
                        </CardText>
                        <CardText>
                          Website Redesign focuses on elevating the digital
                          presence by creating visually appealing, user-friendly
                          interfaces that align with current trends and
                          technologies. Mobile App Development drives customer
                          engagement and accessibility by delivering seamless,
                          feature-rich experiences on handheld devices. Cloud
                          Migration enables businesses to achieve greater
                          scalability, flexibility, and cost savings by
                          leveraging the power of cloud computing. Data
                          Analytics Setup empowers decision-makers with
                          actionable insights through robust data processing,
                          visualization, and predictive modeling.
                        </CardText>
                      </CardBody>
                    </Col>
                    <Col md={6}>
                      <CdBarChart
                        data={setBarChartData(projectResponseData)}
                      ></CdBarChart>
                    </Col>
                  </Row>
                </div>
              </CdCard>
            </Col>
          </Row>
        </div>
      }
    ></CdPageTemplate>
  );
};

export default MpsDashboard;

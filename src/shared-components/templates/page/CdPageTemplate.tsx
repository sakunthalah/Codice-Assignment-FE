import { title } from "node:process";
import { NavBarLinks } from "../../../types/constants/project/navbar-menu";
import {
  AlignItems,
  JustifyContent,
} from "../../../types/enums/components/Container.Enum";
import { CdContainer, CdSideBar } from "../../atoms";
import CdPageTitle from "./CdPageTitle";
import { Col, Row } from "reactstrap";

const navbarLinksWithLang = NavBarLinks.map((link) => {
  return { ...link, navText: link.navText };
});

type PageTemplateProps = {
  tiltleText: string;
  subTiltleText?: string;
  children?: React.ReactNode;
};

const CdPageTemplate: React.FC<PageTemplateProps> = ({
  tiltleText,
  subTiltleText,
  children,
}) => {
  return (
    <div style={{ width: "100%" }}>
      <div className="row">
        <div className="col-lg-2">
          <CdSideBar isOpen={true} navItems={navbarLinksWithLang} />;
        </div>
        <div className="col-lg-10">
          <CdContainer
            justifyContent={JustifyContent.start}
            alignItems={AlignItems.flexStart}
            className="app-container"
          >
            <div className="w-100">
              <div style={{ width: "100%" }}>
                <Row style={{ width: "100%" }}>
                  <Col style={{ width: "100%" }}>
                    <CdPageTitle
                      tiltleText={tiltleText}
                      subTiltleText={subTiltleText}
                    />
                  </Col>
                </Row>
              </div>
              <div style={{ width: "100%" }}>
                <Row style={{ width: "100%" }}>
                  <Col style={{ width: "100%" }}>{children}</Col>
                </Row>
              </div>
            </div>
          </CdContainer>
        </div>
      </div>
    </div>
  );
};
export default CdPageTemplate;

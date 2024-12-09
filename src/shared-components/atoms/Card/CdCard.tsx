import { Card, CardBody, CardImg, CardProps, CardSubtitle, CardText, CardTitle, Col, Row } from "reactstrap";
import {
  JustifyContent,
  AlignItems,
} from "../../../types/enums/components/Container.Enum";


interface CdCardProps extends CardProps {
    cardTitle?: string;
    cardSubtitle?: string;
    cardText?: string;
    width?:string;
    cardImageLink?:string;
    children: React.ReactNode;
  
  }

  const CdCard: React.FC<CdCardProps> = ({
    cardTitle,
    cardSubtitle,
    cardText,
    width,
    cardImageLink,
    children,
    btnProps
  }) => {
    return (
      <Card
        className="my-2"
        style={{
          //width: '28rem'
        }}
      >
          {/* <CardImg className="align-items-center justify-content-center"
        top
        width="100%"
        src={cardImageLink}
        alt="Card image"
      /> */}
        <CardBody className="d-flex align-items-center justify-content-center">
          <div>
          <Row style={{ width: "100%"}}>
          <Col>
          <CardTitle className="text-center primary-font-color" style={{fontWeight:"bold"}}
          tag="h5">
            {cardTitle ?? ''}
          </CardTitle>
          </Col>
          </Row>
          <Row style={{ width: "100%" }}>
          <CardSubtitle 
            className="mb-8 text-muted text-center"
            tag="h6"
          >
            {cardSubtitle ?? ''}
          </CardSubtitle>
          </Row>
          <CardText>
            {cardText ?? ''}
          </CardText>
          {children}
          </div>
          </CardBody>
      </Card>
    );
  };
  
  export default CdCard;
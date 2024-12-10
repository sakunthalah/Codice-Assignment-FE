import { Card, CardBody, CardProps } from "reactstrap";

interface CdCardProps extends CardProps {
  children: React.ReactNode;
}

const CdCard: React.FC<CdCardProps> = ({ children, ...props }) => {
  return (
    <Card {...props}>
      <CardBody className="d-flex align-items-center justify-content-center">
        {children}
      </CardBody>
    </Card>
  );
};

export default CdCard;

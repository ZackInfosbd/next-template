export interface BaseTemplateI {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<BaseTemplateI> = ({ sampleTextProp }) => {
  return <div className="styles.container">{sampleTextProp} </div>;
};

export default BaseTemplate;

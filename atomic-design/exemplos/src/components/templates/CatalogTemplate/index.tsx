import { ThemeColorsType } from '../../../styles/theme';
import { Label } from '../../atoms/Label';

import { GridItems, Subtitle, Container } from './CatalogTemplate.styles';

interface CatalogTemplateProps {
  title: string;
  titleColor?: keyof ThemeColorsType;
  subtitle?: string;
  subtitleColor?: keyof ThemeColorsType;
}

const CatalogTemplate: React.FC<CatalogTemplateProps> = ({
  title,
  subtitle,
  subtitleColor = 'disable',
  titleColor = 'dark',
  children,
}) => {
  return (
    <Container>
      <Label size="extra-large" weight="bold" color={titleColor}>
        {title}
      </Label>
      {subtitle && (
        <Subtitle size="small" color={subtitleColor}>
          {subtitle}
        </Subtitle>
      )}
      <GridItems>{children}</GridItems>
    </Container>
  );
};

export default CatalogTemplate;

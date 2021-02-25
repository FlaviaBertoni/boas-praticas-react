import Label from '../../components/atoms/Label';

export const PageNotFound: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: '5rem',
      }}
    >
      <Label as="h1" color="primary" size="extra-large" weight="bold">
        Oh não!
      </Label>
      <Label as="h2" size="large" style={{ marginTop: '3rem' }}>
        Pagina não encontrada.
      </Label>
    </div>
  );
};

export default PageNotFound;

import * as api from '../../service/api';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Box, Menu } from 'grommet';

export default function SearchDiscipline() {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  async function getTests() {
    const response = await api.getTestsByDiscipline(auth.data);
    setItems(response.data);
    console.log(items);
  }
  useEffect(() => {
    getTests();
  }, []);

  return (
    <>
      <Box height="medium">
        <>
          {items.map((curso) => (
            <Menu
              key={curso.id}
              dropProps={{ align: { bottom: 'bottom', left: 'left' } }}
              label="Visualize por disciplina"
              items={ curso.discipline.map((x) => ({ label: x.name })) }       
            />
          ))}
        </>
      </Box>
    </>
  );
}

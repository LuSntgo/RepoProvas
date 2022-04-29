import * as api from '../../service/api';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Box, Menu } from 'grommet';

export default function SearchTeachers() {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  async function getTeachers() {
    const response = await api.getTestsByTeacher(auth.data);
    setItems(response.data);
    console.log(items);
  }
  useEffect(() => {
    getTeachers();
  }, []);

  return (
    <>
      <Box height="medium">
        {/* <>
          {items.map((course) => (
            <Menu
              key={course.id}
              dropProps={{ align: { bottom: 'bottom', left: 'left' } }}
              label="Visualize por professor"
              items={ course.discipline.map((t) => ({ label: t.name })) }       
            />
          ))}
        </> */}
      </Box>
    </>
  );
}

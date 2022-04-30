import * as api from '../../service/api';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Box, Accordion, AccordionPanel, DropButton, Text } from 'grommet';

export default function SearchDiscipline() {
  const { auth } = useAuth();
  const [categories, setCategories] = useState([]);
  const [terms, setTerms] = useState([]);
  const [tests, setTests] = useState([]);
  const discipline = [];
  const showTest = [];

  if (terms.length != 0) {
    for (let i = 0; i < terms.length; i++) {
      let term = terms[i].disciplines;
      for (let j = 0; j < term.length; j++) {
        let disciplines = term[j].name;
        discipline.push(disciplines);
      }
    }
  }
  if (tests.length != 0) {
    for (let i = 0; i < tests.length; i++) {
      let test = tests[i].tests;
      for (let j = 0; j < test.length; j++) {
        let exam = test[j];
        showTest.push(exam);
      }
    }
  }

  useEffect(() => {
    async function getTests() {
      if (!auth) return;

      const disciplineData = await api.getTestsByDiscipline(auth.token);
      setTerms(disciplineData.data.tests);

      const categoriesData = await api.getCategories(auth.token);
      setCategories(categoriesData.data.categories);
    
      const testsData = await api.getTestsByTeacher(auth.token);
      setTests(testsData.data.tests);
    }

    getTests();
  }, [auth]);

  const AllTests = () => {
    return (
      <div>
        {showTest.map((tst, index) => (
          <a key={index} href={tst.pdfUrl}>  
            <Text key={index} > {`${tst.name}`}</Text>
          </a>           
        ))}
      </div>
    );
  };

  return (
    <>
      <Box height="medium">
        <Accordion>
          <AccordionPanel label="Selecione o período">
            {terms.map((term, index) => (
              <Box key={index} pad="medium" stroke="black" background="light-2">
                <AccordionPanel label={[`${term.number}` + ' período']}>
                  {term.disciplines.map((dscpln, index) => (
                    <DropButton
                      key={index}
                      label={`${dscpln.name}`}
                      dropContent={
                        <Box pad="large" background="#C0886A" color='black'>
                          {categories.map((ctgrs, index) => (
                            <AccordionPanel key={index} label={`${ctgrs.name}`}>
                              <AllTests/>
                            </AccordionPanel>
                          ))}
                        </Box>
                      }
                    />
                  ))}
                </AccordionPanel>
              </Box>
            ))}
          </AccordionPanel>
        </Accordion>
      </Box>
    </>
  );
}

import React, { useEffect, useMemo, useCallback, FC } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Layout, Row, Col } from 'antd';
import { RootState, Dispatch } from '../store';
import ProjectList from '../components/Project/List';
import ProjectEdit from '../components/Project/Edit';
import ProjectCreate from '../components/Project/Create';
// import TableWithSearch from '../components/TableWithSearch';

const { Content } = Layout;

const App: FC = () => {
  const dispatch = useDispatch<Dispatch>();
  const projects = useSelector((state: RootState) => state.project.listData);
  const project = useSelector((state: RootState) => state.project.detailData);
  const fetchList = useCallback(() => dispatch.project.listAsync(), [dispatch]);
  const fetchItem = useCallback(
    ({ id }) => dispatch({ type: 'project/detailAsync', payload: { id } }),
    [dispatch]
  );
  const createItem = useCallback(
    ({ data }) => dispatch({ type: 'project/createAsync', payload: { data } }),
    [dispatch]
  );
  const updateItem = useCallback(
    ({ id, data }) =>
      dispatch({ type: 'project/updateAsync', payload: { id, data } }),
    [dispatch]
  );
  const deleteItem = useCallback(
    ({ id }) => dispatch({ type: 'project/deleteAsync', payload: { id } }),
    [dispatch]
  );

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  return useMemo(
    () => (
      <Content style={{ padding: '50px' }}>
        <Row>
          <Col span={11}>
            <ProjectCreate onCreate={createItem} fetchList={fetchList} />
          </Col>
          <Col span={11} offset={2}>
            {project && <ProjectEdit data={project} onEdit={updateItem} />}
          </Col>
        </Row>
        <ProjectList
          data={projects}
          fetchItem={fetchItem}
          onDelete={deleteItem}
        />
        {/* <TableWithSearch /> */}
      </Content>
    ),
    [
      project,
      projects,
      createItem,
      updateItem,
      deleteItem,
      fetchItem,
      fetchList
    ]
  );
};

export default App;

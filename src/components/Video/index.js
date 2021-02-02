import React from "react";

import { connect } from "react-redux";

const Video = ({ activeLesson, activeModule }) => {
  return (
    <div className="App" style={{ padding: '10px', backgroundColor: 'teal', color: '#ffffff', width: 300}}>
      <h2>Matérias Disponíveis</h2>
      <strong>Módulo: {activeModule.title}</strong>
      <br />
      <span>Aula: {activeLesson.title}</span>
    </div>
  
  );
};

export default connect(state => ({
  activeLesson: state.course.activeLesson,
  activeModule: state.course.activeModule,
}))(Video);

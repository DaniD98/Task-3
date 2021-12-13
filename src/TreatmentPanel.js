import React from 'react'; // imports react library
import './style.css'; // controls styling of page
//Create React Hooks Expressions React.useState(' ') to create setter methods for the attributes
function MedicalTreatmentPanel() {
  const [treatId, setTreatId] = React.useState('');
  const [treatCourseId, setTreatCourseId] = React.useState('');
  const [treattype, setType] = React.useState('');
  const [treatcategory, setCategory] = React.useState('');
  const [patientname, setName] = React.useState('');
  const [treatstartDate, setStartDate] = React.useState('');

  function showClickHandler() {
    window.alert(
      '[' +
        'id = ' +
        treatId +
        ', CourseId = ' +
        treatCourseId +
        ', Type = ' +
        treattype +
        ', Category = ' +
        treatcategory +
        ', Name = ' +
        patientname +
        ', startDate = ' +
        treatstartDate +
        ' ]'
    );
  }

  function clearClickHandler() {
    setTreatId('');
    setTreatCourseId('');
    setType('');
    setCategory('');
    setName('');
    setStartDate('');
  }

  return (
    <div>
      <input
        placeholder="Treatment ID"
        value={treatId}
        onChange={(e) => setTreatId(e.target.value)}
      ></input>

      <br />

      <input
        placeholder="Treatment Course ID"
        value={treatCourseId}
        onChange={(e) => setTreatCourseId(e.target.value)}
      ></input>

      <br />

      <input
        placeholder="Treatment Type"
        value={treattype}
        onChange={(e) => setType(e.target.value)}
      ></input>

      <br />

      <input
        placeholder="Treatment Category"
        value={treatcategory}
        onChange={(e) => setCategory(e.target.value)}
      ></input>

      <br />

      <input
        placeholder="Patient Name"
        value={patientname}
        onChange={(e) => setName(e.target.value)}
      ></input>

      <br />

      <input
        placeholder="Treatment Start Date"
        value={treatstartDate}
        onChange={(e) => setStartDate(e.target.value)}
      ></input>

      <br />

      <br />

      <button style={{ color: 'blue' }} onClick={showClickHandler}>
        Show
      </button>

      <button style={{ color: 'red' }} onClick={clearClickHandler}>
        Clear
      </button>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default MedicalTreatmentPanel; //exports file  MedicalTreatmentPanel to be used by other programs using import statement

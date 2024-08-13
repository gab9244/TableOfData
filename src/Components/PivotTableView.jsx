import PropTypes from 'prop-types';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import { useState } from 'react';

export const PivotTableView = ({ data }) => {
  const [pivotState, setPivotState] = useState({});

  return (
    <div>
      <PivotTableUI
        data={data}
        onChange={s => setPivotState(s)}
        {...pivotState}
      />
    </div>
  );
};

PivotTableView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};



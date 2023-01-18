import React from 'react';
const SubHeading = (props) => (
  <>
    <div style={{ marginBottom: '1rem', color: "white", fontFamily: 'var(--font-base)', fontSize: '34px' }}>
      <p className="p__cormont">
        {props.title}{'                          :)'}
      </p>
    </div>
  </>
);

export default SubHeading;

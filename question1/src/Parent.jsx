import Son from './Son';
import Daughter from './Daughter';

function Parent() {
  return (
    <div>
      <h1>My two Children</h1>

      <Son>
        <p>
          This was written in the parent component, but displayed as a part of
          the son component
        </p>
      </Son>

      <Daughter>
        <p>
          This was written in the parent component, but displayed as a part of
          the daughter component
        </p>
      </Daughter>
    </div>
  );
}

export default Parent
import CreepypastaFrom from '../components/CreepypastaFrom.js';

export default function CreatePage({ handleCreateCreepypasta }) {
  return (
    <>
      <h1>Write your own story!</h1>
      <CreepypastaFrom handleCreateCreepypasta={handleCreateCreepypasta} />
    </>
  );
}

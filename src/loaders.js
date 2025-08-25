export const jobsLoader = async () => {
  const res = await fetch('http://localhost:5000/jobs');
  if (!res.ok) {
    throw Error('Could not found job list');
  }
  return res.json();
};

export const jobDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch('http://localhost:5000/jobs/' + id);
  if (!res.ok) {
    throw Error('Could not found jon details');
  }
  return res.json();
};

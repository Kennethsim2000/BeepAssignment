interface JobScopeProps {
  job: string;
}

const JobScope: React.FC<JobScopeProps> = ({ job }) => {
  return (
    <div className="p-1.5 bg-slate-200 text-gray-400 rounded-lg font-bold">
      {job}
    </div>
  );
};

export default JobScope;

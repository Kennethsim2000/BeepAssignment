interface RoleProps {
  role: string;
}

const Role: React.FC<RoleProps> = ({ role }) => {
  return (
    <div className="p-1.5 bg-green-200 text-green-400 rounded-lg font-bold">
      {role}
    </div>
  );
};

export default Role;

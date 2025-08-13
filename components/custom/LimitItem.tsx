const LimitItem = ({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ComponentType<any>;
  value: string | number;
  label: string;
}) => (
  <div className="flex items-center space-x-2 text-sm">
    <Icon className="h-4 w-4 text-gray-500" />
    <span className="text-gray-700 dark:text-gray-300">
      <span className="font-medium">{value}</span> {label}
    </span>
  </div>
);
export default LimitItem;

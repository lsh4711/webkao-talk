type ConnectionStatusProps = {
  connectionStatus: string;
};

function ConnectionStatus({ connectionStatus }: ConnectionStatusProps) {
  const statusClassMap: Record<string, string> = {
    Connecting: 'bg-blue-500',
    Open: 'bg-green-500',
    Closing: 'bg-yellow-500',
    Closed: 'bg-red-500',
    Uninstantiated: 'bg-gray-500',
  };

  const className = statusClassMap[connectionStatus] || '';

  return <p className={` rounded-md p-1 text-white ${className}`}>{connectionStatus}</p>;
}

export default ConnectionStatus;

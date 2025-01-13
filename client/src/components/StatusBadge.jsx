export const StatusBadge = ({
  status,
  isCircleShown,
  isTextShown,
  width = 'fit',
}) => {
  const renderStatusTag = (status) => {
    {
      switch (status) {
        case 'SUFFICIENT':
          return (
            <div
              className={`flex w-${width} items-center gap-2 rounded-md border border-green-700 bg-green-50 px-3 py-1 text-sm font-semibold text-green-700`}
            >
              {isCircleShown && (
                <div className="size-3 rounded-full bg-green-700 p-2"></div>
              )}
              {isTextShown && status}
            </div>
          );

        case 'LOW':
          return (
            <div
              className={`flex w-${width} items-center gap-2 rounded-md border border-amber-500 bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-500`}
            >
              {isCircleShown && (
                <div className="size-3 rounded-full bg-amber-500 p-2"></div>
              )}
              {isTextShown && status}
            </div>
          );
        case 'CRITICAL':
          return (
            <div
              className={`flex w-${width} items-center gap-2 rounded-md border border-red-600 bg-red-50 px-3 py-1 text-sm font-semibold text-red-600`}
            >
              {isCircleShown && (
                <div className="size-3 rounded-full bg-red-600 p-2"></div>
              )}
              {isTextShown && status}
            </div>
          );
        default:
          return (
            <div
              className={`flex w-${width} items-center gap-2 rounded-md border border-orange-300 px-3 py-1 text-sm font-semibold text-orange-300`}
            >
              {isCircleShown && (
                <div className="size-3 rounded-full bg-orange-300 p-2"></div>
              )}
              {status || 'UNKOWN'}
            </div>
          );
      }
    }
  };
  return renderStatusTag(status);
};

export const StatusCircle = ({ status, size }) => {
  const renderStatusCircle = (status) => {
    {
      switch (status) {
        case 'SUFFICIENT':
          return (
            <div className={`size-${size} rounded-full bg-green-700 p-2`}></div>
          );

        case 'LOW':
          return (
            <div className={`size-${size} rounded-full bg-amber-500 p-2`}></div>
          );
        case 'CRITICAL':
          return (
            <div className={`size-${size} rounded-full bg-red-600 p-2`}></div>
          );
        default:
          return (
            <div
              className={`size-${size} rounded-full bg-orange-300 p-2`}
            ></div>
          );
      }
    }
  };
  return renderStatusCircle(status);
};

const AuthLayouts = (props) => {
    const { children, title, subheader } = props;
    return (
    <div className="w-full max-w-xs border p-8 rounded-md">
      <h1 className="text-blue-600 text-3xl font-bold mb-2 ">{title}</h1>
      <p className="font-medium text-slate-500 mb-8">
        {subheader}
      </p>
      {children}
     </div>
    );
};

export default AuthLayouts
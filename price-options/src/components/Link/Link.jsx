
const Link = ({route}) => {
  return (
    <li className="mr-4">
      <a className="hover:bg-yellow-200 px-6" href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
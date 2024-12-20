import { useContext } from "react";
import myContext from "../../context/myContext";

const UserDetail = () => {
  const context = useContext(myContext);
  const { getAllUsers } = context;

  return (
    <div>
      <div>
        <div className="py-5 flex justify-between items-center">
          <h1 className=" text-xl  font-bold">All Users</h1>
        </div>

        <div className="tableContainer w-full max-h-[400px] overflow-y-auto overflow-x-auto mb-5">
          <table className="w-full text-left border border-collapse sm:border-separate">
            <tbody>
              <tr>
                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 font-bold fontPara"
                >
                  S.No.
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0"
                >
                  Email
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0"
                >
                  UserID
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0"
                >
                  Role
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0"
                >
                  Registered on
                </th>
              </tr>

              {getAllUsers.map((user, index) => {
                const { name, email, date, uid, role } = user;
                return (
                  <>
                    <tr key={index} className="">
                      <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 stroke-slate-500 text-slate-500 ">
                        {"0"}
                        {index + 1}
                      </td>

                      <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                        {name}
                      </td>

                      <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                        {email}
                      </td>

                      <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                        {uid}
                      </td>

                      <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                        {role}
                      </td>

                      <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                        {date}
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;

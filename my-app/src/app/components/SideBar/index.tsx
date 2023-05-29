import { Button } from '../Button';

export const SideBar: React.FC<ISideBarProps> = ({
    isLoading = false, text, onClick, disabled, closeReport
}) => {
    return (
    <div className="ml-[-100%] min-w-max sticky top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
    <div>
        <div className="-mx-6 mt-8 px-6 py-4">
            <img src="https://assets.pathfactory.com/images/PathFactory.svg" className="w-46" alt="pathfactory logo" />
        </div>

        <div className="mt-8 text-center">
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">Muhammad Majid</h5>
            <span className="hidden text-gray-400 lg:block"><strong>Assignment</strong></span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
            <li>
                <Button
                    text={text}
                    disabled={disabled}
                    onClick={onClick}
                    isLoading={isLoading}
                />
            </li>
        </ul>
    </div>

    <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <span
                onClick={() => {closeReport(false)}}
                className="group-hover:text-gray-700"
            >
                Close Report
            </span>
        </button>
    </div>
    </div>
    );
};

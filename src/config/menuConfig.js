import {
    HomeOutlined,
    ShopOutlined,
    AppstoreOutlined,
    ToolOutlined,
    UserOutlined,
    ContactsOutlined,
    AreaChartOutlined,
    BarChartOutlined,
    LineChartOutlined,
    PieChartOutlined
} from '@ant-design/icons';

const menuList = [

    {
        title: 'Home',
        key: '/home',
        icon: <HomeOutlined />,
    },
    {
        title: 'Item',
        key: '/item',
        icon: <ShopOutlined />,
        children: [
            {
                title: 'product',
                key: '/item/product',
                icon: <AppstoreOutlined />,
            },
            {
                title: 'category',
                key: '/item/category',
                icon: <ToolOutlined />,
            }
        ]
    },
    {
        title: 'User',
        key: '/user',
        icon: <UserOutlined />,
    },
    {
        title: 'Role',
        key: '/role',
        icon: <ContactsOutlined />,
    },
    {
        title: 'Chart',
        key: '/chart',
        icon: <AreaChartOutlined />,
        children: [
            {
                title: 'Bar Chart',
                key: '/chart/bar',
                icon: <BarChartOutlined />,
            },
            {
                title: 'Line Chart',
                key: '/chart/line',
                icon: <LineChartOutlined />,
            },
            {
                title: 'Pie Chart',
                key: '/chart/pie',
                icon: <PieChartOutlined />,
            }
        ]
    }

]
{/*<Menu.Item key="home" icon={<HomeOutlined />} title="Home">*/}
{/*    <Link to="home"></Link>*/}
{/*    <span>Home</span>*/}
{/*</Menu.Item>*/}
{/*<SubMenu key="dashboard" icon={<DashboardOutlined/>} title="Dashboard">*/}
{/*    <Menu.Item key="1">Analysis</Menu.Item>*/}
{/*    <Menu.Item key="2">Monitor</Menu.Item>*/}
{/*</SubMenu>*/}
{/*<SubMenu key="form" icon={<FormOutlined/>} title="Form">*/}
{/*    <Menu.Item key="3">New Form</Menu.Item>*/}
{/*</SubMenu>*/}
{/*<SubMenu key="user" icon={<UserOutlined/>} title="User">*/}
{/*</SubMenu>*/}
{/*<SubMenu key="product" icon={<TableOutlined/>} title="Product">*/}
{/*    <Menu.Item key="manage-products" >*/}
{/*    <Link to="product"></Link>*/}
{/*        <span>products</span>*/}
{/*    </Menu.Item>*/}
{/*    <Menu.Item key="product-category">*/}
{/*    <Link to="category"></Link>*/}
{/*        <span>Category</span>*/}
{/*    </Menu.Item>*/}
{/*</SubMenu>*/}
{/*<Menu.Item key="file" icon={<FileOutlined/>}>*/}
{/*    Files*/}
{/*</Menu.Item>*/}
export default menuList
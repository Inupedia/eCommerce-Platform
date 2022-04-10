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
                title: 'Product',
                key: '/item/product',
                icon: <AppstoreOutlined />,
            },
            {
                title: 'Category',
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

export default menuList
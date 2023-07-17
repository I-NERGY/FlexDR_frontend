import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

export const servicesHomepage = [
    {
        'id': 'load_profile',
        'title': 'Load Profile',
        'description': 'Obtain the load profile for the smart meter\'s load pattern for the upcoming day by using clustering techniques',
        'icon': <ViewTimelineIcon style={{color: 'white', fontSize: '80px'}}/>,
        'image': '/images/load_profile.png',
        'link': ''
    },
    {
        'id': 'clusters_profile',
        'title': 'Clusters Profile',
        'description': 'Generate cluster profiles based on algorithm\'s outcomes and provide recommendations tailored to each cluster\'s characteristics.',
        'icon': <SettingsSuggestIcon style={{color: 'white', fontSize: '80px'}}/>,
        'image': '/images/clusters_profile.png',
        'link': ''
    },
]
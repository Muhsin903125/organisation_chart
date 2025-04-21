import { useState } from 'react'
import OrgChart from './OrgChart'
import './App.css'

// Predefined avatar URLs
const avatarUrls = [
  'https://api.dicebear.com/7.x/avataaars/png?seed=Professional1&mouth=smile&eyes=happy',
  'https://api.dicebear.com/7.x/avataaars/png?seed=Professional2&mouth=smile&eyes=happy',
  'https://api.dicebear.com/7.x/avataaars/png?seed=Professional3&mouth=smile&eyes=happy',
  'https://api.dicebear.com/7.x/avataaars/png?seed=Professional4&mouth=smile&eyes=happy',
  'https://api.dicebear.com/7.x/avataaars/png?seed=Professional5&mouth=smile&eyes=happy',
  'https://api.dicebear.com/7.x/avataaars/png?seed=Professional6&mouth=smile&eyes=happy',
  'https://api.dicebear.com/7.x/avataaars/png?seed=Professional7&mouth=smile&eyes=happy',
  'https://api.dicebear.com/7.x/avataaars/png?seed=Professional8&mouth=smile&eyes=happy',
  'https://api.dicebear.com/7.x/avataaars/png?seed=Professional9&mouth=smile&eyes=happy',
  'https://api.dicebear.com/7.x/avataaars/png?seed=Professional10&mouth=smile&eyes=happy',
  'https://api.dicebear.com/7.x/avataaars/png?seed=Professional11&mouth=smile&eyes=happy',
  'https://api.dicebear.com/7.x/avataaars/png?seed=Professional12&mouth=smile&eyes=happy',
  'https://api.dicebear.com/7.x/avataaars/png?seed=Professional13&mouth=smile&eyes=happy',
  'https://api.dicebear.com/7.x/avataaars/png?seed=Professional14&mouth=smile&eyes=happy',
  'https://api.dicebear.com/7.x/avataaars/png?seed=Professional15&mouth=smile&eyes=happy',
  'https://api.dicebear.com/7.x/avataaars/png?seed=Professional16&mouth=smile&eyes=happy',
  'https://api.dicebear.com/7.x/avataaars/png?seed=Professional17&mouth=smile&eyes=happy',
  'https://api.dicebear.com/7.x/avataaars/png?seed=Professional18&mouth=smile&eyes=happy',
  'https://api.dicebear.com/7.x/avataaars/png?seed=Professional19&mouth=smile&eyes=happy',
  'https://api.dicebear.com/7.x/avataaars/png?seed=Professional20&mouth=smile&eyes=happy',
  'https://api.dicebear.com/7.x/avataaars/png?seed=Professional21&mouth=smile&eyes=happy',
  'https://api.dicebear.com/7.x/avataaars/png?seed=Professional22&mouth=smile&eyes=happy',
  'https://api.dicebear.com/7.x/avataaars/png?seed=Professional23&mouth=smile&eyes=happy',
  'https://api.dicebear.com/7.x/avataaars/png?seed=Professional24&mouth=smile&eyes=happy'
];

// Function to get random avatar
const getRandomAvatar = () => {
  const randomIndex = Math.floor(Math.random() * avatarUrls.length);
  return avatarUrls[randomIndex];
};

function App() {
  const [orgData] = useState({
    name: 'John Smith',
    attributes: {
      designation: 'Chief Executive Officer',
      department: 'Executive',
      photo: getRandomAvatar()
    },
    children: [
      {
        name: 'Sarah Johnson',
        attributes: {
          designation: 'Chief Technology Officer',
          department: 'Technology',
          photo: getRandomAvatar()
        },
        children: [
          {
            name: 'Michael Chen',
            attributes: {
              designation: 'Development Manager',
              department: 'Technology',
              photo: getRandomAvatar()
            },
            children: [
              {
                name: 'David Wilson',
                attributes: {
                  designation: 'Senior Developer',
                  department: 'Technology',
                  photo: getRandomAvatar()
                }
              },
              {
                name: 'Emily Brown',
                attributes: {
                  designation: 'Senior Developer',
                  department: 'Technology',
                  photo: getRandomAvatar()
                }
              },
              {
                name: 'Robert Taylor',
                attributes: {
                  designation: 'Developer',
                  department: 'Technology',
                  photo: getRandomAvatar()
                }
              },
              {
                name: 'Jennifer Lee',
                attributes: {
                  designation: 'Developer',
                  department: 'Technology',
                  photo: getRandomAvatar()
                }
              },
              {
                name: 'Thomas White',
                attributes: {
                  designation: 'Developer',
                  department: 'Technology',
                  photo: getRandomAvatar()
                }
              }
            ]
          },
          {
            name: 'Lisa Anderson',
            attributes: {
              designation: 'QA Manager',
              department: 'Technology',
              photo: getRandomAvatar()
            },
            children: [
              {
                name: 'Patricia Clark',
                attributes: {
                  designation: 'QA Lead',
                  department: 'Technology',
                  photo: getRandomAvatar()
                }
              },
              {
                name: 'William Miller',
                attributes: {
                  designation: 'QA Engineer',
                  department: 'Technology',
                  photo: getRandomAvatar()
                }
              },
              {
                name: 'Elizabeth Moore',
                attributes: {
                  designation: 'QA Engineer',
                  department: 'Technology',
                  photo: getRandomAvatar()
                }
              }
            ]
          },
          {
            name: 'Richard Brown',
            attributes: {
              designation: 'DevOps Manager',
              department: 'Technology',
              photo: getRandomAvatar()
            },
            children: [
              {
                name: 'Susan Taylor',
                attributes: {
                  designation: 'DevOps Engineer',
                  department: 'Technology',
                  photo: getRandomAvatar()
                }
              },
              {
                name: 'Daniel Anderson',
                attributes: {
                  designation: 'DevOps Engineer',
                  department: 'Technology',
                  photo: getRandomAvatar()
                }
              }
            ]
          }
        ]
      },
      {
        name: 'James Wilson',
        attributes: {
          designation: 'Chief Financial Officer',
          department: 'Finance',
          photo: getRandomAvatar()
        },
        children: [
          {
            name: 'Mary Davis',
            attributes: {
              designation: 'Finance Manager',
              department: 'Finance',
              photo: getRandomAvatar()
            },
            children: [
              {
                name: 'Kevin Hall',
                attributes: {
                  designation: 'Senior Accountant',
                  department: 'Finance',
                  photo: getRandomAvatar()
                }
              },
              {
                name: 'Amanda Young',
                attributes: {
                  designation: 'Accountant',
                  department: 'Finance',
                  photo: getRandomAvatar()
                }
              },
              {
                name: 'Jessica Martinez',
                attributes: {
                  designation: 'Accountant',
                  department: 'Finance',
                  photo: getRandomAvatar()
                }
              }
            ]
          }
        ]
      },
      {
        name: 'Charles Robinson',
        attributes: {
          designation: 'Chief Marketing Officer',
          department: 'Marketing',
          photo: getRandomAvatar()
        },
        children: [
          {
            name: 'Nancy Lewis',
            attributes: {
              designation: 'Marketing Manager',
              department: 'Marketing',
              photo: getRandomAvatar()
            },
            children: [
              {
                name: 'Matthew Walker',
                attributes: {
                  designation: 'Digital Marketing Lead',
                  department: 'Marketing',
                  photo: getRandomAvatar()
                }
              },
              {
                name: 'Laura Garcia',
                attributes: {
                  designation: 'Content Specialist',
                  department: 'Marketing',
                  photo: getRandomAvatar()
                }
              },
              {
                name: 'David Thompson',
                attributes: {
                  designation: 'Social Media Manager',
                  department: 'Marketing',
                  photo: getRandomAvatar()
                }
              }
            ]
          }
        ]
      },
      {
        name: 'Elizabeth Moore',
        attributes: {
          designation: 'Chief Human Resources Officer',
          department: 'HR',
          photo: getRandomAvatar()
        },
        children: [
          {
            name: 'Thomas White',
            attributes: {
              designation: 'HR Manager',
              department: 'HR',
              photo: getRandomAvatar()
            },
            children: [
              {
                name: 'Patricia Clark',
                attributes: {
                  designation: 'Recruitment Lead',
                  department: 'HR',
                  photo: getRandomAvatar()
                }
              },
              {
                name: 'William Miller',
                attributes: {
                  designation: 'Training Specialist',
                  department: 'HR',
                  photo: getRandomAvatar()
                }
              },
              {
                name: 'Susan Taylor',
                attributes: {
                  designation: 'HR Specialist',
                  department: 'HR',
                  photo: getRandomAvatar()
                }
              }
            ]
          }
        ]
      },
      {
        name: 'Daniel Anderson',
        attributes: {
          designation: 'Chief Operations Officer',
          department: 'Operations',
          photo: getRandomAvatar()
        },
        children: [
          {
            name: 'Karen Thomas',
            attributes: {
              designation: 'Operations Manager',
              department: 'Operations',
              photo: getRandomAvatar()
            },
            children: [
              {
                name: 'Robert Taylor',
                attributes: {
                  designation: 'Project Manager',
                  department: 'Operations',
                  photo: getRandomAvatar()
                }
              },
              {
                name: 'Jennifer Lee',
                attributes: {
                  designation: 'Operations Specialist',
                  department: 'Operations',
                  photo: getRandomAvatar()
                }
              },
              {
                name: 'Michael Chen',
                attributes: {
                  designation: 'Operations Coordinator',
                  department: 'Operations',
                  photo: getRandomAvatar()
                }
              }
            ]
          }
        ]
      }
    ]
  });

  return (
    <div className="App">
      <OrgChart data={orgData} />
    </div>
  )
}

export default App

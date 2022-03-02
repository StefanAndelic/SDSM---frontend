import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { TeamMembers } from '../models/model'

const RoleSelector = ({ changeMemberFunction }: any) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [selectedRole, setSelectedRole] = useState('All')
  const open = Boolean(anchorEl)

  const handleMenuTrigger = (event: any) => {
    setAnchorEl(event.currentTarget)
  }
  const handleMenuSelect = (role: TeamMembers | 'All') => {
    setSelectedRole(role)
    setAnchorEl(null)
    changeMemberFunction(role)
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleMenuTrigger}
        variant="outlined"
      >
        {selectedRole}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleMenuSelect('Project Manager')}>
          Project Manager
        </MenuItem>
        <MenuItem onClick={() => handleMenuSelect('Data Scientist')}>
          Data Scientist
        </MenuItem>
        <MenuItem onClick={() => handleMenuSelect('Application Developer')}>
          Application Developer
        </MenuItem>
        <MenuItem onClick={() => handleMenuSelect('Test Specialist')}>
          Test Specialist
        </MenuItem>
        <MenuItem onClick={() => handleMenuSelect('All')}>Reset</MenuItem>
      </Menu>
    </div>
  )
}

export default RoleSelector

import React, { useState, useCallback, useRef } from 'react';
import Tree from 'react-d3-tree';
import useCenteredTree from './useCenteredTree';
import SearchBar from './SearchBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const getNodeClass = (designation) => {
  if (designation.includes('Chief') || designation.includes('CEO')) {
    return 'node-card node-executive';
  } else if (designation.includes('Manager')) {
    return 'node-card node-manager';
  } else if (designation.includes('Lead')) {
    return 'node-card node-lead';
  } else {
    return 'node-card node-employee';
  }
};

const getHeaderClass = (designation) => {
  if (designation.includes('Chief') || designation.includes('CEO')) {
    return 'node-header executive-header';
  } else if (designation.includes('Manager')) {
    return 'node-header manager-header';
  } else if (designation.includes('Lead')) {
    return 'node-header lead-header';
  } else {
    return 'node-header employee-header';
  }
};

const OrgChart = ({ data }) => {
  const [dimensions, translate, containerRef, setTranslatePos] = useCenteredTree();
  const [zoom, setZoom] = useState(0.8);
  const [highlightedNode, setHighlightedNode] = useState(null);
  const treeRef = useRef(null);

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.1, 2));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.1, 0.5));
  };

  const handleZoomReset = () => {
    setZoom(0.8);
  };

  const expandPathToNode = useCallback((node, data) => {
    const path = [];
    let current = node;
    
    while (current && current !== data) {
      path.unshift(current);
      current = findParent(data, current);
    }
    
    return path;
  }, []);

  const findParent = (root, node) => {
    if (!root.children) return null;
    
    for (const child of root.children) {
      if (child === node) return root;
      const parent = findParent(child, node);
      if (parent) return parent;
    }
    
    return null;
  };

  const expandAllParents = useCallback((node, data) => {
    const path = expandPathToNode(node, data);
    path.forEach(parent => {
      if (parent.__rd3t) {
        parent.__rd3t.collapsed = false;
      }
    });
  }, [expandPathToNode]);

  const focusNode = useCallback((node) => {
    if (treeRef.current) {
      // Expand all parent nodes to make the target node visible
      expandAllParents(node, data);

      // Calculate new position to center the node
      const { x, y } = node.__rd3t;
      const newTranslate = {
        x: dimensions.width / 2 - x * zoom,
        y: dimensions.height / 2 - y * zoom
      };
      
      // Smooth transition to the new position
      setTranslatePos(newTranslate);
      
      // Force a re-render to update the expanded nodes
      setHighlightedNode(prev => ({ ...prev }));
    }
  }, [dimensions, zoom, data, setTranslatePos, expandAllParents]);

  const searchNode = useCallback((node, searchTerm) => {
    const term = searchTerm.toLowerCase();
    const matches = 
      node.name.toLowerCase().includes(term) ||
      node.attributes.designation.toLowerCase().includes(term) ||
      node.attributes.department.toLowerCase().includes(term);

    if (matches) {
      setHighlightedNode(node);
      focusNode(node);
      return true;
    }

    if (node.children) {
      return node.children.some(child => searchNode(child, searchTerm));
    }

    return false;
  }, [focusNode]);

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === '') {
      setHighlightedNode(null);
      return;
    }
    
    const found = searchNode(data, searchTerm);
    if (!found) {
      toast.error('No employee found matching your search', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const handleClear = () => {
    setHighlightedNode(null);
  };

  const renderCustomNode = ({ nodeDatum, toggleNode }) => {
    const { name, attributes } = nodeDatum;
    const { designation, department, photo } = attributes || {};
    const nodeClass = getNodeClass(designation);
    const headerClass = getHeaderClass(designation);
    const isHighlighted = highlightedNode && highlightedNode.name === name;

    return (
      <g onClick={toggleNode}>
        <foreignObject width="200" height="250" x="-100" y="-125">
          <div className={`${nodeClass} ${isHighlighted ? 'highlighted-node' : ''}`}>
            <div className={headerClass}>
              <img 
                src={photo || 'https://via.placeholder.com/150'} 
                alt={name} 
                className="node-avatar"
              />
            </div>
            <div className="node-content">
              <h3 className="node-name">{name}</h3>
              <p className="node-designation">{designation}</p>
              <p className="node-department">{department}</p>
            </div>
          </div>
        </foreignObject>
      </g>
    );
  };

  return (
    <div className="org-chart-container">
      <ToastContainer />
      <div className="search-wrapper">
        <SearchBar onSearch={handleSearch} onClear={handleClear} />
      </div>
      <div className="zoom-controls">
        <button onClick={handleZoomIn}>+</button>
        <button onClick={handleZoomOut}>-</button>
        <button onClick={handleZoomReset}>Reset</button>
      </div>
      <div
        ref={containerRef}
        style={{ 
          width: '100%', 
          height: '100vh',
          backgroundColor: '#f5f5f5',
          position: 'relative'
        }}
      >
        <Tree
          ref={treeRef}
          data={data}
          translate={translate}
          dimensions={dimensions}
          zoom={zoom}
          renderCustomNodeElement={renderCustomNode}
          orientation="vertical"
          pathFunc="step"
          separation={{ siblings: 2, nonSiblings: 2 }}
          nodeSize={{ x: 250, y: 300 }}
          enableLegacyTransitions={true}
          transitionDuration={500}
          collapsible={true}
          zoomable={true}
          draggable={true}
          initialDepth={2}
        />
      </div>
    </div>
  );
};

export default OrgChart; 
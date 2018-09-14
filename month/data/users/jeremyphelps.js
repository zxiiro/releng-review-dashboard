userdata['jeremyphelps'] = {
  "identity": ids["jeremyphelps"],
  "reviewCountPlus2": 10,
  "reviewCountPlus1": 5,
  "reviewCountMinus1": 0,
  "reviewCountMinus2": 0,
  "firstActiveDate": 1534472821000,
  "lastActiveDate": 1536873405000,
  "activeDayCount": 6,
  "commits": [
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I8c3b4a68aaed349d026d08134de4147ea74a9696",
      "commitNumber": 12375,
      "subject": "Disable CLM jobs by default",
      "owner": ids["jeremyphelps"],
      "url": "https://gerrit.linuxfoundation.org/infra/12375",
      "commitMessage": "Disable CLM jobs by default\n\nChange-Id: I8c3b4a68aaed349d026d08134de4147ea74a9696\nSigned-off-by: Jeremy Phelps \u003cjphelps@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535051558000,
      "lastUpdatedDate": 1535053808000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1535051558000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535051784000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/729/"
        },
        {
          "timestamp": 1535051930000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/729/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/729"
        },
        {
          "timestamp": 1535053807000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1535053808000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha (zxiiro)"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "4280674744e6a55cfbf34a6edbab606aa242220a",
          "parents": [
            "9643e91a8afa968c8b9efdcdca04fe8b356fd4e3"
          ],
          "ref": "refs/changes/75/12375/1",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1535051558000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535053807000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1535053808000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535051930000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 4,
          "sizeDeletions": 0
        }
      ]
    }
  ],
  "addedAsReviewerTo": [
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I19b0358a85beb281a07df1ef8ea84c8c7593927f",
      "commitNumber": 12383,
      "subject": "Remove summary/version which comes from PBR now",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12383",
      "commitMessage": "Remove summary/version which comes from PBR now\n\nChange-Id: I19b0358a85beb281a07df1ef8ea84c8c7593927f\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535121503000,
      "lastUpdatedDate": 1535123336000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["jeremyphelps"],
        ids["lf-jenkins"],
        ids["agrimberg"],
        ids["zxiiro"]
      ],
      "comments": [
        {
          "timestamp": 1535121503000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535121627000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1535121722000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/262/"
        },
        {
          "timestamp": 1535121922000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/262/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/262/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/262"
        },
        {
          "timestamp": 1535122312000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1535122435000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/51/ (1/2)"
        },
        {
          "timestamp": 1535122501000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/263/ (2/2)"
        },
        {
          "timestamp": 1535122757000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/51/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/51\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/263/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/263"
        },
        {
          "timestamp": 1535123301000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1535123335000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1535123336000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "09ac3622368d295a8fcb2ca31c8f4dfd6e65a25e",
          "parents": [
            "b925b66ad125f8fc359e8a35ecfbbcf5779b614d"
          ],
          "ref": "refs/changes/83/12383/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535121503000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535121627000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535121922000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 0,
          "sizeDeletions": -3
        },
        {
          "number": 2,
          "revision": "58f28699725a52f14f70b44fd3c72243612d1ef9",
          "parents": [
            "b925b66ad125f8fc359e8a35ecfbbcf5779b614d"
          ],
          "ref": "refs/changes/83/12383/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535122312000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535123335000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1535123336000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535123301000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535122757000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 4,
          "sizeDeletions": -6
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I253a127f7dc0cee5475d8403da8f82e018fdf36e",
      "commitNumber": 12379,
      "subject": "Add option to enable debug logs",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12379",
      "commitMessage": "Add option to enable debug logs\n\nDefault the logger to INFO level and add an option to turn on DEBUG\nlevel logs. Update the unit_tests to pass in a context since we need\nit now in order to support the top-level configuration.\n\nChange-Id: I253a127f7dc0cee5475d8403da8f82e018fdf36e\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535075584000,
      "lastUpdatedDate": 1535120798000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["zxiiro"],
        ids["jeremyphelps"]
      ],
      "comments": [
        {
          "timestamp": 1535075584000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535075691000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/46/ (1/2)"
        },
        {
          "timestamp": 1535075760000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/250/ (2/2)"
        },
        {
          "timestamp": 1535075945000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/46/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/46/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/46\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/250/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/250/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/250"
        },
        {
          "timestamp": 1535076404000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2: Patch Set 1 was rebased."
        },
        {
          "timestamp": 1535076513000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/47/ (1/2)"
        },
        {
          "timestamp": 1535076545000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/252/ (2/2)"
        },
        {
          "timestamp": 1535076757000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/252/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/252/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/252\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/47/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/47"
        },
        {
          "timestamp": 1535080978000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3: Patch Set 2 was rebased."
        },
        {
          "timestamp": 1535081090000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/49/ (1/2)"
        },
        {
          "timestamp": 1535081116000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/255/ (2/2)"
        },
        {
          "timestamp": 1535081320000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/255/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/255/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/255\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/49/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/49"
        },
        {
          "timestamp": 1535085111000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1535085233000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/50/ (1/2)"
        },
        {
          "timestamp": 1535085288000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/259/ (2/2)"
        },
        {
          "timestamp": 1535085532000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/50/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/50\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/259/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/259"
        },
        {
          "timestamp": 1535120626000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 4: Code-Review+2"
        },
        {
          "timestamp": 1535120798000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha (zxiiro)"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "c063e22d00633206d97514b9cc9a4d48b63e5ec4",
          "parents": [
            "1ae0fddcca04a675ea40b67ca8e0fd7ba873b53d"
          ],
          "ref": "refs/changes/79/12379/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535075584000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535075945000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 24,
          "sizeDeletions": -3
        },
        {
          "number": 2,
          "revision": "1228fd6e0d9104d16d6b266c81e6ce1d2816b89d",
          "parents": [
            "7bb1c3885acaa2b294eb67162c9571001d780505"
          ],
          "ref": "refs/changes/79/12379/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535076404000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535076757000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 24,
          "sizeDeletions": -3
        },
        {
          "number": 3,
          "revision": "67bdcebf6b429dfa8b06812bbeae10a920dbfbd2",
          "parents": [
            "28fc57084d22dd96db149069666e945b039b474a"
          ],
          "ref": "refs/changes/79/12379/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535080978000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535081320000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 24,
          "sizeDeletions": -3
        },
        {
          "number": 4,
          "revision": "2380b4e056c54b0258bffa43972fbc171b4af481",
          "parents": [
            "28fc57084d22dd96db149069666e945b039b474a"
          ],
          "ref": "refs/changes/79/12379/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535085111000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1535120798000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535120626000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535085532000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 30,
          "sizeDeletions": -10
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I132bebe298164419fae43e94299f43c45940bc4e",
      "commitNumber": 12381,
      "subject": "Add extras declaration in docs-linkcheck",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12381",
      "commitMessage": "Add extras declaration in docs-linkcheck\n\nThis should have been added to\nI1f33c65a44cf6eaa0e29e5734f3a8edcd8865868\n\nAlso include missing reno notes.\n\nChange-Id: I132bebe298164419fae43e94299f43c45940bc4e\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535080978000,
      "lastUpdatedDate": 1535120784000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["jeremyphelps"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1535080978000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535081168000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/256/"
        },
        {
          "timestamp": 1535081408000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/256/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/256"
        },
        {
          "timestamp": 1535120666000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1535120784000,
          "reviewer": ids["jeremyphelps"],
          "message": "Change has been successfully merged by Jeremy Phelps"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "32275fd2e51e759b4b2c4c4b5f6c6ea4baaffa6c",
          "parents": [
            "8c2e97f01e2c55202546cb5a936ee7b578b5a9af"
          ],
          "ref": "refs/changes/81/12381/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535080978000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535120666000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1535120784000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535081408000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 5,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I74158d94400112161ad4fc206426420d908deb0c",
      "commitNumber": 12378,
      "subject": "Simplify logging configuration",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12378",
      "commitMessage": "Simplify logging configuration\n\nlftools should be a simple tool and folks should not ever need to\nconfigure the logger so let\u0027s simplify things and just pre-define\nan acceptable logger configuration. The important component is\nhaving (DEBUG) messages print via logger service. A subsequent\npatch will be provided to enable --debug level logs via CLI.\n\nChange-Id: I74158d94400112161ad4fc206426420d908deb0c\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535075584000,
      "lastUpdatedDate": 1535120784000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["jeremyphelps"]
      ],
      "comments": [
        {
          "timestamp": 1535075584000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535075739000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/249/"
        },
        {
          "timestamp": 1535075937000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/249/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/249/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/249"
        },
        {
          "timestamp": 1535076404000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2: Patch Set 1 was rebased."
        },
        {
          "timestamp": 1535076511000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/251/"
        },
        {
          "timestamp": 1535076730000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/251/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/251/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/251"
        },
        {
          "timestamp": 1535080978000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3: Patch Set 2 was rebased."
        },
        {
          "timestamp": 1535081066000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/254/"
        },
        {
          "timestamp": 1535081272000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/254/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/254"
        },
        {
          "timestamp": 1535120776000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1535120784000,
          "reviewer": ids["jeremyphelps"],
          "message": "Change has been successfully merged by Jeremy Phelps"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "1ae0fddcca04a675ea40b67ca8e0fd7ba873b53d",
          "parents": [
            "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
          ],
          "ref": "refs/changes/78/12378/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535075584000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535075937000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 11,
          "sizeDeletions": -69
        },
        {
          "number": 2,
          "revision": "7bb1c3885acaa2b294eb67162c9571001d780505",
          "parents": [
            "8c2e97f01e2c55202546cb5a936ee7b578b5a9af"
          ],
          "ref": "refs/changes/78/12378/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535076404000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535076730000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 11,
          "sizeDeletions": -69
        },
        {
          "number": 3,
          "revision": "28fc57084d22dd96db149069666e945b039b474a",
          "parents": [
            "32275fd2e51e759b4b2c4c4b5f6c6ea4baaffa6c"
          ],
          "ref": "refs/changes/78/12378/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535080978000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535120776000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1535120784000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535081272000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 11,
          "sizeDeletions": -69
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "v0.24.x",
      "id": "Ic466cd74a568e0de2fbb0f3fd75205cd04c1e3f9",
      "commitNumber": 12584,
      "subject": "Use --user for tox install instead of virtualenv",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12584",
      "commitMessage": "Use --user for tox install instead of virtualenv\n\nAllows us to remove the workaround of installing lftools in\na venv before as the virtualenvs should no longer be conflicting.\n\nChange-Id: Ic466cd74a568e0de2fbb0f3fd75205cd04c1e3f9\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1536867166000,
      "lastUpdatedDate": 1536885099000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["jeremyphelps"]
      ],
      "comments": [
        {
          "timestamp": 1536867166000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536868365000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1536869133000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/759/"
        },
        {
          "timestamp": 1536869301000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Code-Review-1\n\nBuild Unstable \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/759/ : UNSTABLE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/759/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/759"
        },
        {
          "timestamp": 1536869359000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2:\n\nrecheck"
        },
        {
          "timestamp": 1536869563000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: -Code-Review\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/760/"
        },
        {
          "timestamp": 1536869743000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Code-Review-1\n\nBuild Unstable \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/760/ : UNSTABLE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/760/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/760"
        },
        {
          "timestamp": 1536870136000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2:\n\nrecheck"
        },
        {
          "timestamp": 1536870243000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: -Code-Review\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/762/"
        },
        {
          "timestamp": 1536870397000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Code-Review-1\n\nBuild Unstable \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/762/ : UNSTABLE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/762/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/762"
        },
        {
          "timestamp": 1536870522000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2:\n\nrecheck"
        },
        {
          "timestamp": 1536870548000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: -Code-Review\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/763/"
        },
        {
          "timestamp": 1536870693000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Code-Review-1\n\nBuild Unstable \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/763/ : UNSTABLE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/763/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/763"
        },
        {
          "timestamp": 1536870918000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: -Code-Review\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/764/"
        },
        {
          "timestamp": 1536871047000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Code-Review-1\n\nBuild Unstable \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/764/ : UNSTABLE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/764/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/764"
        },
        {
          "timestamp": 1536871394000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2:\n\nrecheck"
        },
        {
          "timestamp": 1536871583000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: -Code-Review\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/766/"
        },
        {
          "timestamp": 1536871722000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Code-Review-1\n\nBuild Unstable \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/766/ : UNSTABLE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/766/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/766"
        },
        {
          "timestamp": 1536871928000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2:\n\nrecheck"
        },
        {
          "timestamp": 1536872133000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: -Code-Review\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/767/"
        },
        {
          "timestamp": 1536872230000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/767/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/767/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/767"
        },
        {
          "timestamp": 1536872276000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2:\n\nrecheck"
        },
        {
          "timestamp": 1536872325000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1536872432000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/768/"
        },
        {
          "timestamp": 1536872470000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/769/"
        },
        {
          "timestamp": 1536872522000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/768/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/768/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/768"
        },
        {
          "timestamp": 1536872538000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/769/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/769/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/769"
        },
        {
          "timestamp": 1536872557000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1536872707000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/770/"
        },
        {
          "timestamp": 1536872783000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/770/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/770/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/770"
        },
        {
          "timestamp": 1536872884000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4:\n\nrecheck"
        },
        {
          "timestamp": 1536873071000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/771/"
        },
        {
          "timestamp": 1536873282000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/771/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/771"
        },
        {
          "timestamp": 1536873403000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 4: Code-Review+2"
        },
        {
          "timestamp": 1536873405000,
          "reviewer": ids["jeremyphelps"],
          "message": "Change has been successfully merged by Jeremy Phelps"
        },
        {
          "timestamp": 1536885099000,
          "reviewer": ids["zxiiro"],
          "message": "Topic set to lftools-venv"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "05a4bcbecb33edadda5e7f62b834905c28118503",
          "parents": [
            "0c7c17f769c76574c333b3c08fffe795d44e9db9"
          ],
          "ref": "refs/changes/84/12584/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536867166000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 1,
          "sizeDeletions": -5
        },
        {
          "number": 2,
          "revision": "42a5ace9e5a1a502c495815ef1e460f2a1ad6655",
          "parents": [
            "0c7c17f769c76574c333b3c08fffe795d44e9db9"
          ],
          "ref": "refs/changes/84/12584/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536868365000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1536872522000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 4,
          "sizeDeletions": -7
        },
        {
          "number": 3,
          "revision": "800d9d69a51fbf7d5674c46ad800ca8a1df23e07",
          "parents": [
            "0c7c17f769c76574c333b3c08fffe795d44e9db9"
          ],
          "ref": "refs/changes/84/12584/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536872325000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1536872538000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 7,
          "sizeDeletions": -17
        },
        {
          "number": 4,
          "revision": "90db9af77b1d31e7c22e6dc181c8b8c6f00b821e",
          "parents": [
            "0c7c17f769c76574c333b3c08fffe795d44e9db9"
          ],
          "ref": "refs/changes/84/12584/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536872557000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536873403000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536873405000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536873282000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 7,
          "sizeDeletions": -17
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I0da9d6bb99a5a0a9666697b27416fa5e5518e316",
      "commitNumber": 12558,
      "subject": "Fix package list script to not fail on diff",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12558",
      "commitMessage": "Fix package list script to not fail on diff\n\nThe diff command exits 1 if there is a difference between 2 files.\nThis is perfectly valid so ignore the exit code for this command.\n\nChange-Id: I0da9d6bb99a5a0a9666697b27416fa5e5518e316\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1536774646000,
      "lastUpdatedDate": 1536775978000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"],
        ids["askb"],
        ids["jeremyphelps"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1536774646000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536774712000,
          "reviewer": ids["zxiiro"],
          "message": "Assignee added: Jeremy Phelps \u003cjphelps@linuxfoundation.org\u003e"
        },
        {
          "timestamp": 1536774740000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1536774949000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/755/"
        },
        {
          "timestamp": 1536775115000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/755/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/755"
        },
        {
          "timestamp": 1536775127000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha (zxiiro)"
        },
        {
          "timestamp": 1536775477000,
          "reviewer": ids["askb"],
          "message": "Patch Set 1:\n\n(1 comment)"
        },
        {
          "timestamp": 1536775759000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1:\n\n(1 comment)"
        },
        {
          "timestamp": 1536775978000,
          "reviewer": ids["askb"],
          "message": "Patch Set 1: Code-Review+2"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "2b3cda5089750601fada2c62cf8d2f5d8050f513",
          "parents": [
            "b94a82bd078988fbfb58496cb1ac835d48e5ec6e"
          ],
          "ref": "refs/changes/58/12558/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536774646000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536775127000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536775978000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536774740000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536775115000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/package-listing.sh",
              "line": 53,
              "reviewer": ids["askb"],
              "message": "Does start and end packages guarantee sorted order? if not you should be sort both before passing it to diff.",
              "patchSetTimestamp": 1536774646000
            },
            {
              "file": "shell/package-listing.sh",
              "line": 53,
              "reviewer": ids["agrimberg"],
              "message": "It\u0027s guaranteed on RPM systems, dpkg (in all my testing) always listed things sorted so it\u0027s not passed to sort.\n\nSee lines 36 - 48. IIRC this script is called twice. Once at the start of the job, and once at the end. It\u0027s designed to be safely used that way.",
              "patchSetTimestamp": 1536774646000
            }
          ],
          "sizeInsertions": 7,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "v0.24.x",
      "id": "I0da9d6bb99a5a0a9666697b27416fa5e5518e316",
      "commitNumber": 12559,
      "subject": "Fix package list script to not fail on diff",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12559",
      "commitMessage": "Fix package list script to not fail on diff\n\nThe diff command exits 1 if there is a difference between 2 files.\nThis is perfectly valid so ignore the exit code for this command.\n\nChange-Id: I0da9d6bb99a5a0a9666697b27416fa5e5518e316\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1536774935000,
      "lastUpdatedDate": 1536775332000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"],
        ids["jeremyphelps"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1536774935000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536774956000,
          "reviewer": ids["zxiiro"],
          "message": "Assignee added: Jeremy Phelps \u003cjphelps@linuxfoundation.org\u003e"
        },
        {
          "timestamp": 1536775106000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1536775143000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/756/"
        },
        {
          "timestamp": 1536775237000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1536775322000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/756/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/756"
        },
        {
          "timestamp": 1536775332000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha (zxiiro)"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "49e53b5efbb33cd87005bc5e9a8559c0c1abf1da",
          "parents": [
            "73c1e4ad26a06e40fee8e08aad09ed3831b4cdf6"
          ],
          "ref": "refs/changes/59/12559/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536774935000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536775237000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536775332000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536775106000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536775322000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 7,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I5cc5be89985e0fcb99cb256053282b5e740b05c1",
      "commitNumber": 12386,
      "subject": "Release global-jjb v0.24.0",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12386",
      "commitMessage": "Release global-jjb v0.24.0\n\nChange-Id: I5cc5be89985e0fcb99cb256053282b5e740b05c1\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535129032000,
      "lastUpdatedDate": 1535137594000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["jeremyphelps"],
        ids["lf-jenkins"],
        ids["jwagantall"],
        ids["agrimberg"]
      ],
      "comments": [
        {
          "timestamp": 1535129032000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535129069000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1535129223000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/733/"
        },
        {
          "timestamp": 1535129416000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/733/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/733/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/733"
        },
        {
          "timestamp": 1535129650000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\nrecheck"
        },
        {
          "timestamp": 1535129731000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/734/"
        },
        {
          "timestamp": 1535129897000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/734/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/734/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/734"
        },
        {
          "timestamp": 1535136625000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2: Patch Set 1 was rebased."
        },
        {
          "timestamp": 1535136679000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1535136722000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/735/"
        },
        {
          "timestamp": 1535136918000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/735/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/735"
        },
        {
          "timestamp": 1535137269000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1535137349000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/737/"
        },
        {
          "timestamp": 1535137537000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/737/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/737"
        },
        {
          "timestamp": 1535137561000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1535137594000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "60ec4785f2e352de426bac9b572dceebaf6056ae",
          "parents": [
            "d87ce091fe93fff99e25343a69baaa26c186ca85"
          ],
          "ref": "refs/changes/86/12386/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535129032000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535129069000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535129897000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 73,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "c0eee9de2b4ad16e5c309b19e282f431ece94a40",
          "parents": [
            "39a6c08a76bd6ea41cca61075dbf8365b075043c"
          ],
          "ref": "refs/changes/86/12386/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535136625000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535136679000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535136918000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 73,
          "sizeDeletions": 0
        },
        {
          "number": 3,
          "revision": "73c1e4ad26a06e40fee8e08aad09ed3831b4cdf6",
          "parents": [
            "39a6c08a76bd6ea41cca61075dbf8365b075043c"
          ],
          "ref": "refs/changes/86/12386/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535137269000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535137561000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1535137594000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535137537000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 74,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I55947020e2f0cdbb61f9d4e7e88927d9bc304d17",
      "commitNumber": 12150,
      "subject": "Add pre-build step to prep vm before build",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12150",
      "commitMessage": "Add pre-build step to prep vm before build\n\nThis new build step will run before any jobs run to prep the\nbuilder.\n\nThis change should not force using of $HOME/.local/bin just yet\nbut preps the macros in place for us to activate it in jobs later.\nThe current virtualenv method should override what\u0027s done here.\n\nChange-Id: I55947020e2f0cdbb61f9d4e7e88927d9bc304d17\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1533692398000,
      "lastUpdatedDate": 1535121742000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["bramwelt"],
        ids["jeremyphelps"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1533692398000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1533692432000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\nWe should definitely test this heavily before rolling it out."
        },
        {
          "timestamp": 1534627007000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1534627075000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/724/"
        },
        {
          "timestamp": 1534627091000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review+1"
        },
        {
          "timestamp": 1534627163000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2:\n\n(1 comment)"
        },
        {
          "timestamp": 1534627203000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1534627210000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3: Code-Review+1"
        },
        {
          "timestamp": 1534627231000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/724/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/724/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/724"
        },
        {
          "timestamp": 1534627286000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/725/"
        },
        {
          "timestamp": 1534627443000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/725/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/725/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/725"
        },
        {
          "timestamp": 1534874225000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1534874361000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/308/ (1/2)"
        },
        {
          "timestamp": 1534874373000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/728/ (2/2)"
        },
        {
          "timestamp": 1534874531000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/308/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/308\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/728/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/728"
        },
        {
          "timestamp": 1535120592000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4: Code-Review+1"
        },
        {
          "timestamp": 1535121725000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 4: Code-Review+2"
        },
        {
          "timestamp": 1535121727000,
          "reviewer": ids["jeremyphelps"],
          "message": "Change has been successfully merged by Jeremy Phelps"
        },
        {
          "timestamp": 1535121742000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4:\n\nSince this was asked in IRC. The `-l` flag does not affect Jenkins\u0027 injection of environment variables. They still get passed in."
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "8a35e1d85e715da711e240ff08c2f66e24ed52e7",
          "parents": [
            "8a5ed774fd2f4109ff9fe6da4359263dc3a1ab29"
          ],
          "ref": "refs/changes/50/12150/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1533692398000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 32,
          "sizeDeletions": -2
        },
        {
          "number": 2,
          "revision": "51eaa4905557f05c9297a942f78648acaed7f750",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/50/12150/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534627007000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1534627091000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1534627231000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/python-tools-install.sh",
              "line": 24,
              "reviewer": ids["zxiiro"],
              "message": "pip freeze is probably a good idea.",
              "patchSetTimestamp": 1534627007000
            }
          ],
          "sizeInsertions": 39,
          "sizeDeletions": -9
        },
        {
          "number": 3,
          "revision": "5f544b9e6a5ecdb346c6a228025a7b37b06692e7",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/50/12150/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534627203000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1534627210000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1534627443000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 40,
          "sizeDeletions": -9
        },
        {
          "number": 4,
          "revision": "b3c4fefa00bb18fe2d8ae6f4ba3e2bf0abd154c5",
          "parents": [
            "33acf6e113cf0f9fa8ce4bfa1df9df5473c28c41"
          ],
          "ref": "refs/changes/50/12150/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534874225000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1535120592000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535121725000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1535121727000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534874531000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 45,
          "sizeDeletions": -9
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Ib706663f0c08bd7a9160b0a6ce69dcd3b802f8f5",
      "commitNumber": 12089,
      "subject": "Move openstack-cron job to global-jjb",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12089",
      "commitMessage": "Move openstack-cron job to global-jjb\n\nMove OpenDaylight\u0027s builder-openstack-cron job to global-jjb. This is\nan initial patch that only migrates the \"image-protection\" script.\n\nimage-protection is used to parse jenkins-config/ and jjb/ directories\nfor any mention of images starting with \"ZZCI\" and flagging them as\nprotected. The assumption here is that ZZCI images are CI managed\nand if they are referred to anywher by anything then they are\neffectively considered in-use and should not be deletable so flag\nthem as \"protected: true\" in OpenStack.\n\nChange-Id: Ib706663f0c08bd7a9160b0a6ce69dcd3b802f8f5\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1533248747000,
      "lastUpdatedDate": 1534912772000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["zxiiro"],
        ids["jeremyphelps"],
        ids["agrimberg"],
        ids["askb"]
      ],
      "comments": [
        {
          "timestamp": 1533248747000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1533855314000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1533856981000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1533857084000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1533857144000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 5."
        },
        {
          "timestamp": 1533857930000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 6."
        },
        {
          "timestamp": 1533858011000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/693/"
        },
        {
          "timestamp": 1533858163000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/693/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/693/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/693"
        },
        {
          "timestamp": 1533860928000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 7."
        },
        {
          "timestamp": 1533861004000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/695/"
        },
        {
          "timestamp": 1533861144000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/695/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/695/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/695"
        },
        {
          "timestamp": 1533861478000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 7: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1533863246000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 7:\n\n(1 comment)"
        },
        {
          "timestamp": 1534472279000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 8."
        },
        {
          "timestamp": 1534472396000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/295/ (1/2)"
        },
        {
          "timestamp": 1534472446000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/696/ (2/2)"
        },
        {
          "timestamp": 1534472579000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/696/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/696/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/696\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/295/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/295"
        },
        {
          "timestamp": 1534472648000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 8:\n\n(1 comment)\n\nrecheck"
        },
        {
          "timestamp": 1534472821000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 9."
        },
        {
          "timestamp": 1534472936000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 9:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/296/ (1/2)"
        },
        {
          "timestamp": 1534472986000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 9:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/697/ (2/2)"
        },
        {
          "timestamp": 1534473183000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 9: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/697/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/697/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/697\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/296/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/296"
        },
        {
          "timestamp": 1534518429000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 9:\n\nrecheck"
        },
        {
          "timestamp": 1534518558000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 9: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/297/ (1/2)"
        },
        {
          "timestamp": 1534518572000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 9:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/698/ (2/2)"
        },
        {
          "timestamp": 1534518714000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 9: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/297/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/297\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/698/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/698"
        },
        {
          "timestamp": 1534532779000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 9:\n\n(1 comment)"
        },
        {
          "timestamp": 1534532994000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 9: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1534533108000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 9:\n\n(1 comment)"
        },
        {
          "timestamp": 1534533197000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 9:\n\n(1 comment)"
        },
        {
          "timestamp": 1534534599000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 9:\n\n(2 comments)"
        },
        {
          "timestamp": 1534557156000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 9:\n\n(3 comments)"
        },
        {
          "timestamp": 1534557169000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 10."
        },
        {
          "timestamp": 1534557243000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 10:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/302/ (1/3)"
        },
        {
          "timestamp": 1534557299000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 10:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/707/ (2/3)"
        },
        {
          "timestamp": 1534557417000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 10:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/9/ (3/3)"
        },
        {
          "timestamp": 1534557730000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 10: Code-Review+1"
        },
        {
          "timestamp": 1534558654000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 10:\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/302/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/302\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/707/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/707\n\nhttps://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/9/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/builder-jjb-verify-upstream-gjjb/9"
        },
        {
          "timestamp": 1534558792000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 10:\n\nrecheck"
        },
        {
          "timestamp": 1534558855000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 10:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/303/ (1/2)"
        },
        {
          "timestamp": 1534558905000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 10:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/709/ (2/2)"
        },
        {
          "timestamp": 1534559053000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 10: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/303/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/303\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/709/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/709"
        },
        {
          "timestamp": 1534784723000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 10: Code-Review+2"
        },
        {
          "timestamp": 1534784724000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        },
        {
          "timestamp": 1534912772000,
          "reviewer": ids["askb"],
          "message": "Patch Set 10: Code-Review+2"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "4ffceaf68e6a2734d26de463d4effd39dd59927b",
          "parents": [
            "356637f0d3d4091aecde9889c1bc9ec758a33336"
          ],
          "ref": "refs/changes/89/12089/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1533248747000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 145,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "827b04f997822dca99dd0872e57d4c0ce23644f7",
          "parents": [
            "3ae312fbcced7c547bbe98a5692a6d2dcfc17558"
          ],
          "ref": "refs/changes/89/12089/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1533855314000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 120,
          "sizeDeletions": 0
        },
        {
          "number": 3,
          "revision": "fb2809c45a676a4c27bba5c75125de7cfbb69dc3",
          "parents": [
            "3ae312fbcced7c547bbe98a5692a6d2dcfc17558"
          ],
          "ref": "refs/changes/89/12089/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1533856981000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 142,
          "sizeDeletions": 0
        },
        {
          "number": 4,
          "revision": "5ac03c9b791c9759f3d4e125f4eeda495ab5da18",
          "parents": [
            "3ae312fbcced7c547bbe98a5692a6d2dcfc17558"
          ],
          "ref": "refs/changes/89/12089/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1533857084000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 144,
          "sizeDeletions": 0
        },
        {
          "number": 5,
          "revision": "bc6cc7ef3fa73e39be4300ccb190797ba3dbbabd",
          "parents": [
            "3ae312fbcced7c547bbe98a5692a6d2dcfc17558"
          ],
          "ref": "refs/changes/89/12089/5",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1533857144000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 144,
          "sizeDeletions": 0
        },
        {
          "number": 6,
          "revision": "c9b375460e82fa2a6173f515bb00fb897cc86dd4",
          "parents": [
            "3ae312fbcced7c547bbe98a5692a6d2dcfc17558"
          ],
          "ref": "refs/changes/89/12089/6",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1533857930000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1533858163000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 169,
          "sizeDeletions": 0
        },
        {
          "number": 7,
          "revision": "0dd206d7a8c7d629b9c1a37721802c5d413e96b0",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/89/12089/7",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1533860928000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1533861478000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1533861144000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/openstack-protect-in-use-images.sh",
              "line": 28,
              "reviewer": ids["zxiiro"],
              "message": "This overrides the previous image :(",
              "patchSetTimestamp": 1533860928000
            },
            {
              "file": "shell/openstack-protect-in-use-images.sh",
              "line": 32,
              "reviewer": ids["zxiiro"],
              "message": "I wonder if we can get the protected setting from calling \"openstack image list\" so that we only hit the api once and cache it.",
              "patchSetTimestamp": 1533860928000
            },
            {
              "file": "shell/openstack-protect-in-use-images.sh",
              "line": 32,
              "reviewer": ids["zxiiro"],
              "message": "Nope :(\n\n$ openstack --os-cloud opendaylight image list -c protected\nNo recognized column names in [\u0027protected\u0027]. Recognized columns are (\u0027ID\u0027, \u0027Name\u0027, \u0027Status\u0027).",
              "patchSetTimestamp": 1533860928000
            }
          ],
          "sizeInsertions": 165,
          "sizeDeletions": 0
        },
        {
          "number": 8,
          "revision": "df7d40a7c575335504c6dfbca3175a5f9cfbf11d",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/89/12089/8",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534472279000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1534472579000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 203,
          "sizeDeletions": 0
        },
        {
          "number": 9,
          "revision": "a8bf421dfb474d51165feda1cabab2d184491bf6",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/89/12089/9",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534472821000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1534532994000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534518714000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 1074,
              "reviewer": ids["jeremyphelps"],
              "message": "This represents a breaking change as it will fail if the file doesn\u0027t exist.  Just calling out.",
              "patchSetTimestamp": 1534472821000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 1074,
              "reviewer": ids["zxiiro"],
              "message": "yep this file is required though to do anything with openstack. We should document it in ci-jobs.rst though",
              "patchSetTimestamp": 1534472821000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 1074,
              "reviewer": ids["zxiiro"],
              "message": "Done",
              "patchSetTimestamp": 1534472821000
            },
            {
              "file": "shell/openstack-protect-in-use-images.sh",
              "line": 27,
              "reviewer": ids["jeremyphelps"],
              "message": "This command doesn\u0027t seem to be valid, at least on my laptop \njphelps@workhorse ~/projects/edgex/ci-management                                                                                                                                                 \n\u003e $ grep -r \u0027ZZCI - \u0027 --include \\*.yaml | awk -F\": \" -e \u0027{print $3}\u0027 | sed \"s:\u0027::;s:\u0027$::;/^$/d\" | sort -u                                                               \nawk: not an option: -e",
              "patchSetTimestamp": 1534472821000
            },
            {
              "file": "shell/openstack-protect-in-use-images.sh",
              "line": 27,
              "reviewer": ids["jeremyphelps"],
              "message": "cfg_images array...the grep only looks in yaml.\nand below\nyaml_images only looks in .cfg files.",
              "patchSetTimestamp": 1534472821000
            },
            {
              "file": "shell/openstack-protect-in-use-images.sh",
              "line": 27,
              "reviewer": ids["zxiiro"],
              "message": "doh, i\u0027ll fix that...",
              "patchSetTimestamp": 1534472821000
            },
            {
              "file": "shell/openstack-protect-in-use-images.sh",
              "line": 27,
              "reviewer": ids["zxiiro"],
              "message": "It is valid at least on CentOS. Here\u0027s my test here:\n\nhttps://jenkins.opendaylight.org/sandbox/job/builder-openstack-cron/4/",
              "patchSetTimestamp": 1534472821000
            },
            {
              "file": "shell/openstack-protect-in-use-images.sh",
              "line": 27,
              "reviewer": ids["zxiiro"],
              "message": "Looks like not all versions of awk have -e. I\u0027ll try without -e and see if it still works.",
              "patchSetTimestamp": 1534472821000
            },
            {
              "file": "shell/openstack-protect-in-use-images.sh",
              "line": 27,
              "reviewer": ids["zxiiro"],
              "message": "Done",
              "patchSetTimestamp": 1534472821000
            }
          ],
          "sizeInsertions": 202,
          "sizeDeletions": 0
        },
        {
          "number": 10,
          "revision": "d7b9a7cbd308d3d7d0174b5556ef6a53c744cf26",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/89/12089/10",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534557169000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1534784723000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1534784724000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1534557730000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1534912772000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534559053000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 204,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I76db9d6146228180c9af3f06780705dac33b7899",
      "commitNumber": 12344,
      "subject": "Set permit-all true for all jobs",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12344",
      "commitMessage": "Set permit-all true for all jobs\n\nWe need this set for all jobs otherwise GHPR will spam GitHub.\nThis was set for verify jobs but the merge jobs did not have them.\n\nChange-Id: I76db9d6146228180c9af3f06780705dac33b7899\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1534869998000,
      "lastUpdatedDate": 1534870591000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["jeremyphelps"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1534869998000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1534870304000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1534870362000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1534870445000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/727/"
        },
        {
          "timestamp": 1534870578000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/727/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/727"
        },
        {
          "timestamp": 1534870591000,
          "reviewer": ids["jeremyphelps"],
          "message": "Change has been successfully merged by Jeremy Phelps"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "33acf6e113cf0f9fa8ce4bfa1df9df5473c28c41",
          "parents": [
            "d53f21f3662ca552b586a3ed8371b14955457b4e"
          ],
          "ref": "refs/changes/44/12344/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534869998000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1534870304000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1534870362000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1534870591000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534870578000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 6,
          "sizeDeletions": -6
        }
      ]
    }
  ],
  "reviewRequestors": [
    {
      "identity": ids["zxiiro"],
      "approvalData": {
        "addedAsReviewerCount": 11,
        "approvalCount": 15,
        "commentCount": 3,
        "approvals": {
          "1": 5,
          "2": 10
        }
      }
    }
  ],
  "commentsWritten": [
    {
      "commit": {
        "project": "releng/global-jjb",
        "branch": "master",
        "id": "Ib706663f0c08bd7a9160b0a6ce69dcd3b802f8f5",
        "commitNumber": 12089,
        "subject": "Move openstack-cron job to global-jjb",
        "owner": ids["zxiiro"],
        "url": "https://gerrit.linuxfoundation.org/infra/12089",
        "commitMessage": "Move openstack-cron job to global-jjb\n\nMove OpenDaylight\u0027s builder-openstack-cron job to global-jjb. This is\nan initial patch that only migrates the \"image-protection\" script.\n\nimage-protection is used to parse jenkins-config/ and jjb/ directories\nfor any mention of images starting with \"ZZCI\" and flagging them as\nprotected. The assumption here is that ZZCI images are CI managed\nand if they are referred to anywher by anything then they are\neffectively considered in-use and should not be deletable so flag\nthem as \"protected: true\" in OpenStack.\n\nChange-Id: Ib706663f0c08bd7a9160b0a6ce69dcd3b802f8f5\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
        "createdOnDate": 1533248747000,
        "lastUpdatedDate": 1534912772000,
        "isOpen": false,
        "status": "MERGED",
        "reviewers": [
          ids["lf-jenkins"],
          ids["zxiiro"],
          ids["jeremyphelps"],
          ids["agrimberg"],
          ids["askb"]
        ],
        "comments": [
          {
            "timestamp": 1533248747000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1533855314000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 2."
          },
          {
            "timestamp": 1533856981000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 3."
          },
          {
            "timestamp": 1533857084000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 4."
          },
          {
            "timestamp": 1533857144000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 5."
          },
          {
            "timestamp": 1533857930000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 6."
          },
          {
            "timestamp": 1533858011000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/693/"
          },
          {
            "timestamp": 1533858163000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 6: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/693/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/693/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/693"
          },
          {
            "timestamp": 1533860928000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 7."
          },
          {
            "timestamp": 1533861004000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 7:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/695/"
          },
          {
            "timestamp": 1533861144000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 7: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/695/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/695/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/695"
          },
          {
            "timestamp": 1533861478000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 7: Code-Review-1\n\n(1 comment)"
          },
          {
            "timestamp": 1533863246000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 7:\n\n(1 comment)"
          },
          {
            "timestamp": 1534472279000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 8."
          },
          {
            "timestamp": 1534472396000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/295/ (1/2)"
          },
          {
            "timestamp": 1534472446000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/696/ (2/2)"
          },
          {
            "timestamp": 1534472579000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 8: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/696/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/696/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/696\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/295/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/295"
          },
          {
            "timestamp": 1534472648000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 8:\n\n(1 comment)\n\nrecheck"
          },
          {
            "timestamp": 1534472821000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 9."
          },
          {
            "timestamp": 1534472936000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 9:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/296/ (1/2)"
          },
          {
            "timestamp": 1534472986000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 9:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/697/ (2/2)"
          },
          {
            "timestamp": 1534473183000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 9: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/697/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/697/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/697\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/296/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/296"
          },
          {
            "timestamp": 1534518429000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 9:\n\nrecheck"
          },
          {
            "timestamp": 1534518558000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 9: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/297/ (1/2)"
          },
          {
            "timestamp": 1534518572000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 9:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/698/ (2/2)"
          },
          {
            "timestamp": 1534518714000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 9: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/297/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/297\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/698/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/698"
          },
          {
            "timestamp": 1534532779000,
            "reviewer": ids["jeremyphelps"],
            "message": "Patch Set 9:\n\n(1 comment)"
          },
          {
            "timestamp": 1534532994000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 9: Code-Review-1\n\n(1 comment)"
          },
          {
            "timestamp": 1534533108000,
            "reviewer": ids["jeremyphelps"],
            "message": "Patch Set 9:\n\n(1 comment)"
          },
          {
            "timestamp": 1534533197000,
            "reviewer": ids["jeremyphelps"],
            "message": "Patch Set 9:\n\n(1 comment)"
          },
          {
            "timestamp": 1534534599000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 9:\n\n(2 comments)"
          },
          {
            "timestamp": 1534557156000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 9:\n\n(3 comments)"
          },
          {
            "timestamp": 1534557169000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 10."
          },
          {
            "timestamp": 1534557243000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 10:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/302/ (1/3)"
          },
          {
            "timestamp": 1534557299000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 10:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/707/ (2/3)"
          },
          {
            "timestamp": 1534557417000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 10:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/9/ (3/3)"
          },
          {
            "timestamp": 1534557730000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 10: Code-Review+1"
          },
          {
            "timestamp": 1534558654000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 10:\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/302/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/302\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/707/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/707\n\nhttps://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/9/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/builder-jjb-verify-upstream-gjjb/9"
          },
          {
            "timestamp": 1534558792000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 10:\n\nrecheck"
          },
          {
            "timestamp": 1534558855000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 10:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/303/ (1/2)"
          },
          {
            "timestamp": 1534558905000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 10:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/709/ (2/2)"
          },
          {
            "timestamp": 1534559053000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 10: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/303/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/303\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/709/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/709"
          },
          {
            "timestamp": 1534784723000,
            "reviewer": ids["agrimberg"],
            "message": "Patch Set 10: Code-Review+2"
          },
          {
            "timestamp": 1534784724000,
            "reviewer": ids["agrimberg"],
            "message": "Change has been successfully merged by Andrew Grimberg"
          },
          {
            "timestamp": 1534912772000,
            "reviewer": ids["askb"],
            "message": "Patch Set 10: Code-Review+2"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "4ffceaf68e6a2734d26de463d4effd39dd59927b",
            "parents": [
              "356637f0d3d4091aecde9889c1bc9ec758a33336"
            ],
            "ref": "refs/changes/89/12089/1",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1533248747000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 145,
            "sizeDeletions": 0
          },
          {
            "number": 2,
            "revision": "827b04f997822dca99dd0872e57d4c0ce23644f7",
            "parents": [
              "3ae312fbcced7c547bbe98a5692a6d2dcfc17558"
            ],
            "ref": "refs/changes/89/12089/2",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1533855314000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 120,
            "sizeDeletions": 0
          },
          {
            "number": 3,
            "revision": "fb2809c45a676a4c27bba5c75125de7cfbb69dc3",
            "parents": [
              "3ae312fbcced7c547bbe98a5692a6d2dcfc17558"
            ],
            "ref": "refs/changes/89/12089/3",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1533856981000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 142,
            "sizeDeletions": 0
          },
          {
            "number": 4,
            "revision": "5ac03c9b791c9759f3d4e125f4eeda495ab5da18",
            "parents": [
              "3ae312fbcced7c547bbe98a5692a6d2dcfc17558"
            ],
            "ref": "refs/changes/89/12089/4",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1533857084000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 144,
            "sizeDeletions": 0
          },
          {
            "number": 5,
            "revision": "bc6cc7ef3fa73e39be4300ccb190797ba3dbbabd",
            "parents": [
              "3ae312fbcced7c547bbe98a5692a6d2dcfc17558"
            ],
            "ref": "refs/changes/89/12089/5",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1533857144000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 144,
            "sizeDeletions": 0
          },
          {
            "number": 6,
            "revision": "c9b375460e82fa2a6173f515bb00fb897cc86dd4",
            "parents": [
              "3ae312fbcced7c547bbe98a5692a6d2dcfc17558"
            ],
            "ref": "refs/changes/89/12089/6",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1533857930000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1533858163000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 169,
            "sizeDeletions": 0
          },
          {
            "number": 7,
            "revision": "0dd206d7a8c7d629b9c1a37721802c5d413e96b0",
            "parents": [
              "75cd5909da184179c77a55d1909f7159d9eea34b"
            ],
            "ref": "refs/changes/89/12089/7",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1533860928000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1533861478000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1533861144000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "shell/openstack-protect-in-use-images.sh",
                "line": 28,
                "reviewer": ids["zxiiro"],
                "message": "This overrides the previous image :(",
                "patchSetTimestamp": 1533860928000
              },
              {
                "file": "shell/openstack-protect-in-use-images.sh",
                "line": 32,
                "reviewer": ids["zxiiro"],
                "message": "I wonder if we can get the protected setting from calling \"openstack image list\" so that we only hit the api once and cache it.",
                "patchSetTimestamp": 1533860928000
              },
              {
                "file": "shell/openstack-protect-in-use-images.sh",
                "line": 32,
                "reviewer": ids["zxiiro"],
                "message": "Nope :(\n\n$ openstack --os-cloud opendaylight image list -c protected\nNo recognized column names in [\u0027protected\u0027]. Recognized columns are (\u0027ID\u0027, \u0027Name\u0027, \u0027Status\u0027).",
                "patchSetTimestamp": 1533860928000
              }
            ],
            "sizeInsertions": 165,
            "sizeDeletions": 0
          },
          {
            "number": 8,
            "revision": "df7d40a7c575335504c6dfbca3175a5f9cfbf11d",
            "parents": [
              "75cd5909da184179c77a55d1909f7159d9eea34b"
            ],
            "ref": "refs/changes/89/12089/8",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1534472279000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1534472579000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 203,
            "sizeDeletions": 0
          },
          {
            "number": 9,
            "revision": "a8bf421dfb474d51165feda1cabab2d184491bf6",
            "parents": [
              "75cd5909da184179c77a55d1909f7159d9eea34b"
            ],
            "ref": "refs/changes/89/12089/9",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1534472821000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1534532994000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1534518714000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "jjb/lf-ci-jobs.yaml",
                "line": 1074,
                "reviewer": ids["jeremyphelps"],
                "message": "This represents a breaking change as it will fail if the file doesn\u0027t exist.  Just calling out.",
                "patchSetTimestamp": 1534472821000
              },
              {
                "file": "jjb/lf-ci-jobs.yaml",
                "line": 1074,
                "reviewer": ids["zxiiro"],
                "message": "yep this file is required though to do anything with openstack. We should document it in ci-jobs.rst though",
                "patchSetTimestamp": 1534472821000
              },
              {
                "file": "jjb/lf-ci-jobs.yaml",
                "line": 1074,
                "reviewer": ids["zxiiro"],
                "message": "Done",
                "patchSetTimestamp": 1534472821000
              },
              {
                "file": "shell/openstack-protect-in-use-images.sh",
                "line": 27,
                "reviewer": ids["jeremyphelps"],
                "message": "This command doesn\u0027t seem to be valid, at least on my laptop \njphelps@workhorse ~/projects/edgex/ci-management                                                                                                                                                 \n\u003e $ grep -r \u0027ZZCI - \u0027 --include \\*.yaml | awk -F\": \" -e \u0027{print $3}\u0027 | sed \"s:\u0027::;s:\u0027$::;/^$/d\" | sort -u                                                               \nawk: not an option: -e",
                "patchSetTimestamp": 1534472821000
              },
              {
                "file": "shell/openstack-protect-in-use-images.sh",
                "line": 27,
                "reviewer": ids["jeremyphelps"],
                "message": "cfg_images array...the grep only looks in yaml.\nand below\nyaml_images only looks in .cfg files.",
                "patchSetTimestamp": 1534472821000
              },
              {
                "file": "shell/openstack-protect-in-use-images.sh",
                "line": 27,
                "reviewer": ids["zxiiro"],
                "message": "doh, i\u0027ll fix that...",
                "patchSetTimestamp": 1534472821000
              },
              {
                "file": "shell/openstack-protect-in-use-images.sh",
                "line": 27,
                "reviewer": ids["zxiiro"],
                "message": "It is valid at least on CentOS. Here\u0027s my test here:\n\nhttps://jenkins.opendaylight.org/sandbox/job/builder-openstack-cron/4/",
                "patchSetTimestamp": 1534472821000
              },
              {
                "file": "shell/openstack-protect-in-use-images.sh",
                "line": 27,
                "reviewer": ids["zxiiro"],
                "message": "Looks like not all versions of awk have -e. I\u0027ll try without -e and see if it still works.",
                "patchSetTimestamp": 1534472821000
              },
              {
                "file": "shell/openstack-protect-in-use-images.sh",
                "line": 27,
                "reviewer": ids["zxiiro"],
                "message": "Done",
                "patchSetTimestamp": 1534472821000
              }
            ],
            "sizeInsertions": 202,
            "sizeDeletions": 0
          },
          {
            "number": 10,
            "revision": "d7b9a7cbd308d3d7d0174b5556ef6a53c744cf26",
            "parents": [
              "75cd5909da184179c77a55d1909f7159d9eea34b"
            ],
            "ref": "refs/changes/89/12089/10",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1534557169000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1534784723000,
                "grantedBy": ids["agrimberg"]
              },
              {
                "type": "SUBM",
                "description": "",
                "value": 1,
                "grantedOnDate": 1534784724000,
                "grantedBy": ids["agrimberg"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1534557730000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1534912772000,
                "grantedBy": ids["askb"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1534559053000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 204,
            "sizeDeletions": 0
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "jjb/lf-ci-jobs.yaml",
          "line": 1074,
          "reviewer": ids["jeremyphelps"],
          "message": "This represents a breaking change as it will fail if the file doesn\u0027t exist.  Just calling out.",
          "patchSetTimestamp": 1534472821000
        },
        {
          "file": "shell/openstack-protect-in-use-images.sh",
          "line": 27,
          "reviewer": ids["jeremyphelps"],
          "message": "This command doesn\u0027t seem to be valid, at least on my laptop \njphelps@workhorse ~/projects/edgex/ci-management                                                                                                                                                 \n\u003e $ grep -r \u0027ZZCI - \u0027 --include \\*.yaml | awk -F\": \" -e \u0027{print $3}\u0027 | sed \"s:\u0027::;s:\u0027$::;/^$/d\" | sort -u                                                               \nawk: not an option: -e",
          "patchSetTimestamp": 1534472821000
        },
        {
          "file": "shell/openstack-protect-in-use-images.sh",
          "line": 27,
          "reviewer": ids["jeremyphelps"],
          "message": "cfg_images array...the grep only looks in yaml.\nand below\nyaml_images only looks in .cfg files.",
          "patchSetTimestamp": 1534472821000
        }
      ]
    }
  ],
  "commentsReceived": [],
  "reviewersForOwnCommits": [
    {
      "identity": ids["zxiiro"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 1,
        "commentCount": 0,
        "approvals": {
          "2": 1
        }
      }
    },
    {
      "identity": ids["lf-jenkins"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    }
  ],
  "repositories": {
    "releng/global-jjb": {
      "name": "releng/global-jjb",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/global-jjb",
      "reviewRequestors": [
        {
          "identity": ids["zxiiro"],
          "approvalData": {
            "addedAsReviewerCount": 0,
            "approvalCount": 0,
            "commentCount": 3,
            "approvals": {}
          }
        }
      ],
      "commitCountForUser": 1
    }
  },
  "averageTimeInCodeReview": 2250000,
  "abandonedCommitCount": 0,
  "projects": [
    {
      "name": "releng/global-jjb",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/global-jjb",
      "reviewRequestors": [
        {
          "identity": ids["zxiiro"],
          "approvalData": {
            "addedAsReviewerCount": 0,
            "approvalCount": 0,
            "commentCount": 3,
            "approvals": {}
          }
        }
      ],
      "commitCountForUser": 1
    }
  ],
  "selfReviewedCommitCount": 0,
  "inReviewCommitCount": 0
};
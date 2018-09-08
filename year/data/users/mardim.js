userdata['mardim'] = {
  "identity": ids["mardim"],
  "reviewCountPlus2": 0,
  "reviewCountPlus1": 1,
  "reviewCountMinus1": 0,
  "reviewCountMinus2": 0,
  "firstActiveDate": 1525524127000,
  "lastActiveDate": 1525783314000,
  "activeDayCount": 2,
  "commits": [
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I38aaf2ff3d655d44e757c863f83a0b2cb811ab41",
      "commitNumber": 10460,
      "subject": "Bug Fix: Replace -type f with -xtype f",
      "owner": ids["mardim"],
      "url": "https://gerrit.linuxfoundation.org/infra/10460",
      "commitMessage": "Bug Fix: Replace -type f with -xtype f\n\nThe -type f parameter cannot recognize symbolic link files\nso the replacement with the -xtype f parameter solve this problem\n\nhttps://jira.opendaylight.org/browse/INTPAK-162\n\nChange-Id: I38aaf2ff3d655d44e757c863f83a0b2cb811ab41\nSigned-off-by: Dimitrios Markou \u003cmardim@intracom-telecom.com\u003e\nSigned-off-by: Anil Belur \u003cabelur@linuxfoundation.org\u003e\n",
      "createdOnDate": 1525524127000,
      "lastUpdatedDate": 1525565219000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"],
        ids["agardner"],
        ids["askb"],
        ids["jwagantall"],
        ids["lf-jenkins"],
        ids["dfarrell07"],
        ids["jluhrsen"]
      ],
      "comments": [
        {
          "timestamp": 1525524127000,
          "reviewer": ids["mardim"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1525524366000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/420/"
        },
        {
          "timestamp": 1525524541000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/420/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/420"
        },
        {
          "timestamp": 1525562250000,
          "reviewer": ids["jluhrsen"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1525564031000,
          "reviewer": ids["askb"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1525564201000,
          "reviewer": ids["askb"],
          "message": "Patch Set 1: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1525564299000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 2: Commit message was updated."
        },
        {
          "timestamp": 1525564503000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/421/"
        },
        {
          "timestamp": 1525564683000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/421/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/421"
        },
        {
          "timestamp": 1525565216000,
          "reviewer": ids["askb"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1525565219000,
          "reviewer": ids["askb"],
          "message": "Change has been successfully merged by Anil Belur"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "4b7b95d316c0711208add009eb3061d49af44f13",
          "parents": [
            "c3150dcea8069e284ec52bf487541576a62687ab"
          ],
          "ref": "refs/changes/60/10460/1",
          "uploader": ids["mardim"],
          "createdOnDate": 1525524127000,
          "author": ids["mardim"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1525564201000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1525524541000,
              "grantedBy": ids["lf-jenkins"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1525562250000,
              "grantedBy": ids["jluhrsen"]
            }
          ],
          "comments": [
            {
              "file": "/COMMIT_MSG",
              "line": 12,
              "reviewer": ids["askb"],
              "message": "minor nit, we link ODL jira in the same way instead we should use the full link.",
              "patchSetTimestamp": 1525524127000
            }
          ],
          "sizeInsertions": 1,
          "sizeDeletions": -1
        },
        {
          "number": 2,
          "revision": "d3cac52899668bc9b7f1fe7fcf16203bcf86ce53",
          "parents": [
            "c3150dcea8069e284ec52bf487541576a62687ab"
          ],
          "ref": "refs/changes/60/10460/2",
          "uploader": ids["askb"],
          "createdOnDate": 1525564299000,
          "author": ids["mardim"],
          "isDraft": false,
          "kind": "NO_CODE_CHANGE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1525565216000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1525565219000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1525564683000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1,
          "sizeDeletions": -1
        }
      ]
    }
  ],
  "addedAsReviewerTo": [
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I6fdd8876235843101bc175ff91ed872aab88279d",
      "commitNumber": 11513,
      "subject": "Fix missing parameters in tox-verify job",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/11513",
      "commitMessage": "Fix missing parameters in tox-verify job\n\nPatch If2edba598b47484b1708f1e0f3fb96f035511841 broke parameters in\nthe tox-verify job by overriding all the existing parameters with\nonly the PARALLEL parameter. This patch fixes it by moving the\nparallel parameter definition so that it is declared along with\nthe other parameters the job requires.\n\nIssue: RELENG-1042\nChange-Id: I6fdd8876235843101bc175ff91ed872aab88279d\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1529674627000,
      "lastUpdatedDate": 1529675720000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["jeremyphelps"],
        ids["lf-jenkins"],
        ids["mardim"]
      ],
      "comments": [
        {
          "timestamp": 1529674627000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1529674797000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/599/"
        },
        {
          "timestamp": 1529674972000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/599/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/599"
        },
        {
          "timestamp": 1529675716000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1529675720000,
          "reviewer": ids["jeremyphelps"],
          "message": "Change has been successfully merged by Jeremy Phelps"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "50385bf61cda37f7c0316da924c2e0b407157e4b",
          "parents": [
            "f325f0dc4d34cb79e9c15813140db1e18ed2a185"
          ],
          "ref": "refs/changes/13/11513/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1529674627000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1529675716000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1529675720000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1529674972000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 4,
          "sizeDeletions": -7
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Ie69a77b11ff92a40157a9fa31d70f4a9bca7aa9d",
      "commitNumber": 10511,
      "subject": "Release global-jjb v0.19.1",
      "owner": ids["askb"],
      "url": "https://gerrit.linuxfoundation.org/infra/10511",
      "commitMessage": "Release global-jjb v0.19.1\n\nChange-Id: Ie69a77b11ff92a40157a9fa31d70f4a9bca7aa9d\nSigned-off-by: Anil Belur \u003cabelur@linuxfoundation.org\u003e\n",
      "createdOnDate": 1525782857000,
      "lastUpdatedDate": 1525816515000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["bramwelt"],
        ids["lf-jenkins"],
        ids["mardim"]
      ],
      "comments": [
        {
          "timestamp": 1525782857000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1525782966000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/422/ (1/2)"
        },
        {
          "timestamp": 1525783314000,
          "reviewer": ids["mardim"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1525783327000,
          "reviewer": ids["mardim"],
          "message": "Patch Set 1:\n\nThank you Anil !!"
        },
        {
          "timestamp": 1525783346000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/151/ (2/2)"
        },
        {
          "timestamp": 1525783430000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/422/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/422\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/151/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/151"
        },
        {
          "timestamp": 1525785200000,
          "reviewer": ids["bramwelt"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1525790650000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1525802409000,
          "reviewer": ids["bramwelt"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1525816252000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1525816303000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/423/ (1/2)"
        },
        {
          "timestamp": 1525816314000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1525816403000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/152/ (2/2)"
        },
        {
          "timestamp": 1525816503000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/423/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/423\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/152/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/152"
        },
        {
          "timestamp": 1525816515000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "eb2129e5606e711fcdf116eb3df398ce6a4d2e53",
          "parents": [
            "d3cac52899668bc9b7f1fe7fcf16203bcf86ce53"
          ],
          "ref": "refs/changes/11/10511/1",
          "uploader": ids["askb"],
          "createdOnDate": 1525782857000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1525790650000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1525802409000,
              "grantedBy": ids["bramwelt"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1525783430000,
              "grantedBy": ids["lf-jenkins"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1525783314000,
              "grantedBy": ids["mardim"]
            }
          ],
          "comments": [
            {
              "file": "relnotes/v0.19.1.txt",
              "line": 20,
              "reviewer": ids["agrimberg"],
              "message": "This should be:\n\nThis hotfix release is based on a request from the OpenDaylight packaging team due to blocked jobs.\n\nWe need to specify the customer making the request!",
              "patchSetTimestamp": 1525782857000
            }
          ],
          "sizeInsertions": 27,
          "sizeDeletions": -1
        },
        {
          "number": 2,
          "revision": "ccfdb70a9cd0326f4c8dc76a6c5f4abd01fda7d3",
          "parents": [
            "d3cac52899668bc9b7f1fe7fcf16203bcf86ce53"
          ],
          "ref": "refs/changes/11/10511/2",
          "uploader": ids["askb"],
          "createdOnDate": 1525816252000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1525816314000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1525816515000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1525816503000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 27,
          "sizeDeletions": -1
        }
      ]
    }
  ],
  "reviewRequestors": [
    {
      "identity": ids["askb"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 1,
        "commentCount": 0,
        "approvals": {
          "1": 1
        }
      }
    },
    {
      "identity": ids["zxiiro"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    }
  ],
  "commentsWritten": [],
  "commentsReceived": [
    {
      "commit": {
        "project": "releng/global-jjb",
        "branch": "master",
        "id": "I38aaf2ff3d655d44e757c863f83a0b2cb811ab41",
        "commitNumber": 10460,
        "subject": "Bug Fix: Replace -type f with -xtype f",
        "owner": ids["mardim"],
        "url": "https://gerrit.linuxfoundation.org/infra/10460",
        "commitMessage": "Bug Fix: Replace -type f with -xtype f\n\nThe -type f parameter cannot recognize symbolic link files\nso the replacement with the -xtype f parameter solve this problem\n\nhttps://jira.opendaylight.org/browse/INTPAK-162\n\nChange-Id: I38aaf2ff3d655d44e757c863f83a0b2cb811ab41\nSigned-off-by: Dimitrios Markou \u003cmardim@intracom-telecom.com\u003e\nSigned-off-by: Anil Belur \u003cabelur@linuxfoundation.org\u003e\n",
        "createdOnDate": 1525524127000,
        "lastUpdatedDate": 1525565219000,
        "isOpen": false,
        "status": "MERGED",
        "reviewers": [
          ids["agrimberg"],
          ids["zxiiro"],
          ids["agardner"],
          ids["askb"],
          ids["jwagantall"],
          ids["lf-jenkins"],
          ids["dfarrell07"],
          ids["jluhrsen"]
        ],
        "comments": [
          {
            "timestamp": 1525524127000,
            "reviewer": ids["mardim"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1525524366000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/420/"
          },
          {
            "timestamp": 1525524541000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/420/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/420"
          },
          {
            "timestamp": 1525562250000,
            "reviewer": ids["jluhrsen"],
            "message": "Patch Set 1: Code-Review+1"
          },
          {
            "timestamp": 1525564031000,
            "reviewer": ids["askb"],
            "message": "Patch Set 1: Code-Review+1"
          },
          {
            "timestamp": 1525564201000,
            "reviewer": ids["askb"],
            "message": "Patch Set 1: Code-Review-1\n\n(1 comment)"
          },
          {
            "timestamp": 1525564299000,
            "reviewer": ids["askb"],
            "message": "Uploaded patch set 2: Commit message was updated."
          },
          {
            "timestamp": 1525564503000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/421/"
          },
          {
            "timestamp": 1525564683000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/421/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/421"
          },
          {
            "timestamp": 1525565216000,
            "reviewer": ids["askb"],
            "message": "Patch Set 2: Code-Review+2"
          },
          {
            "timestamp": 1525565219000,
            "reviewer": ids["askb"],
            "message": "Change has been successfully merged by Anil Belur"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "4b7b95d316c0711208add009eb3061d49af44f13",
            "parents": [
              "c3150dcea8069e284ec52bf487541576a62687ab"
            ],
            "ref": "refs/changes/60/10460/1",
            "uploader": ids["mardim"],
            "createdOnDate": 1525524127000,
            "author": ids["mardim"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1525564201000,
                "grantedBy": ids["askb"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1525524541000,
                "grantedBy": ids["lf-jenkins"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1525562250000,
                "grantedBy": ids["jluhrsen"]
              }
            ],
            "comments": [
              {
                "file": "/COMMIT_MSG",
                "line": 12,
                "reviewer": ids["askb"],
                "message": "minor nit, we link ODL jira in the same way instead we should use the full link.",
                "patchSetTimestamp": 1525524127000
              }
            ],
            "sizeInsertions": 1,
            "sizeDeletions": -1
          },
          {
            "number": 2,
            "revision": "d3cac52899668bc9b7f1fe7fcf16203bcf86ce53",
            "parents": [
              "c3150dcea8069e284ec52bf487541576a62687ab"
            ],
            "ref": "refs/changes/60/10460/2",
            "uploader": ids["askb"],
            "createdOnDate": 1525564299000,
            "author": ids["mardim"],
            "isDraft": false,
            "kind": "NO_CODE_CHANGE",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1525565216000,
                "grantedBy": ids["askb"]
              },
              {
                "type": "SUBM",
                "description": "",
                "value": 1,
                "grantedOnDate": 1525565219000,
                "grantedBy": ids["askb"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1525564683000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 1,
            "sizeDeletions": -1
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "/COMMIT_MSG",
          "line": 12,
          "reviewer": ids["askb"],
          "message": "minor nit, we link ODL jira in the same way instead we should use the full link.",
          "patchSetTimestamp": 1525524127000
        }
      ]
    }
  ],
  "reviewersForOwnCommits": [
    {
      "identity": ids["askb"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 2,
        "commentCount": 1,
        "approvals": {
          "-1": 1,
          "2": 1
        }
      }
    },
    {
      "identity": ids["agardner"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    },
    {
      "identity": ids["zxiiro"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
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
    },
    {
      "identity": ids["agrimberg"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    },
    {
      "identity": ids["jwagantall"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    },
    {
      "identity": ids["jluhrsen"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 1,
        "commentCount": 0,
        "approvals": {
          "1": 1
        }
      }
    },
    {
      "identity": ids["dfarrell07"],
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
      "reviewRequestors": [],
      "commitCountForUser": 1
    }
  },
  "averageTimeInCodeReview": 41092000,
  "abandonedCommitCount": 0,
  "projects": [
    {
      "name": "releng/global-jjb",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/global-jjb",
      "reviewRequestors": [],
      "commitCountForUser": 1
    }
  ],
  "selfReviewedCommitCount": 0,
  "inReviewCommitCount": 0
};
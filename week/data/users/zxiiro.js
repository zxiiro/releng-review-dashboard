userdata['zxiiro'] = {
  "identity": ids["zxiiro"],
  "reviewCountPlus2": 0,
  "reviewCountPlus1": 0,
  "reviewCountMinus1": 0,
  "reviewCountMinus2": 0,
  "firstActiveDate": 1534558526000,
  "lastActiveDate": 1536366483000,
  "activeDayCount": 8,
  "commits": [
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I7a75f944030e35d4b021709700084abf11b6ae00",
      "commitNumber": 12505,
      "subject": "Enable universal wheel",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12505",
      "commitMessage": "Enable universal wheel\n\nlftools is Python 2 and 3 compatible so enable universal wheels.\n\nChange-Id: I7a75f944030e35d4b021709700084abf11b6ae00\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1536362694000,
      "lastUpdatedDate": 1536363143000,
      "isOpen": true,
      "status": "NEW",
      "reviewers": [
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1536362694000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536362962000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/300/"
        },
        {
          "timestamp": 1536363143000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/300/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/300"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "c18664985fc54650f699c347935981838b0d8f46",
          "parents": [
            "ea7f2b8aaab8224860e82504109d4357eba00ec2"
          ],
          "ref": "refs/changes/05/12505/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536362694000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536363143000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 3,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I58dc200f7b29429ee1215bacdc533d234ad153fb",
      "commitNumber": 12483,
      "subject": "Add cmd to share openstack images",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12483",
      "commitMessage": "Add cmd to share openstack images\n\nAllows us to more easily share images to multiple openstack tenants.\n\nIssue: RELENG-1201\nChange-Id: I58dc200f7b29429ee1215bacdc533d234ad153fb\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1536289612000,
      "lastUpdatedDate": 1536358056000,
      "isOpen": true,
      "status": "NEW",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["jwagantall"]
      ],
      "comments": [
        {
          "timestamp": 1536289612000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536289708000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1536289747000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3: Commit message was updated."
        },
        {
          "timestamp": 1536335586000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3: Code-Review-1\n\nDon\u0027t forget reno notes."
        },
        {
          "timestamp": 1536341796000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1536341979000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/294/"
        },
        {
          "timestamp": 1536342152000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/294/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/294"
        },
        {
          "timestamp": 1536348809000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 5: Patch Set 4 was rebased."
        },
        {
          "timestamp": 1536348885000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/298/"
        },
        {
          "timestamp": 1536349132000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/298/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/298"
        },
        {
          "timestamp": 1536349628000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 5:\n\nI want to test this.. let me do that and then I can post my review.."
        },
        {
          "timestamp": 1536351972000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 5:\n\n(1 comment)"
        },
        {
          "timestamp": 1536352342000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 5:\n\n(1 comment)"
        },
        {
          "timestamp": 1536358056000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 5:\n\n(1 comment)"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "4c8a4cd76b2fd88b72cf9749000511031bdd581b",
          "parents": [
            "f5988d8e61013b13643575782b8418f31df65a3c"
          ],
          "ref": "refs/changes/83/12483/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536289612000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 86,
          "sizeDeletions": -1
        },
        {
          "number": 2,
          "revision": "1a935890675c3c7d2f06ef17fd1434f3eb53156a",
          "parents": [
            "f5988d8e61013b13643575782b8418f31df65a3c"
          ],
          "ref": "refs/changes/83/12483/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536289708000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 86,
          "sizeDeletions": 0
        },
        {
          "number": 3,
          "revision": "a9bc42abee5750f4d5da89bc8cf5bf02fae2e196",
          "parents": [
            "f5988d8e61013b13643575782b8418f31df65a3c"
          ],
          "ref": "refs/changes/83/12483/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536289747000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "NO_CODE_CHANGE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1536335586000,
              "grantedBy": ids["zxiiro"]
            }
          ],
          "comments": [],
          "sizeInsertions": 86,
          "sizeDeletions": 0
        },
        {
          "number": 4,
          "revision": "3b44464f6fe101ef6f19c15911092ce0be32bef5",
          "parents": [
            "f5988d8e61013b13643575782b8418f31df65a3c"
          ],
          "ref": "refs/changes/83/12483/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536341796000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536342152000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 98,
          "sizeDeletions": 0
        },
        {
          "number": 5,
          "revision": "50ce256a1e792c82f409c7b66b7b8bad1a9b5a37",
          "parents": [
            "ea7f2b8aaab8224860e82504109d4357eba00ec2"
          ],
          "ref": "refs/changes/83/12483/5",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536348809000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536349132000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "releasenotes/notes/share-openstack-images-4f1e3d18fdcb488b.yaml",
              "line": 8,
              "reviewer": ids["jwagantall"],
              "message": "This command needs to specify that \"os-cloud\" option is required. \nFor example:\nlftools openstack --os-cloud \u003ccloud\u003e image share ...",
              "patchSetTimestamp": 1536348809000
            },
            {
              "file": "releasenotes/notes/share-openstack-images-4f1e3d18fdcb488b.yaml",
              "line": 8,
              "reviewer": ids["jwagantall"],
              "message": "I think there is a conflict of usage messages, is it?\nFor example:\n\n(lftools-dev) jessicag@jessicag:~/linuxfoundation/lftools-dev/lftools$ lftools openstack image share --help\nUsage: lftools openstack [OPTIONS] COMMAND [ARGS]...\n\nError: Missing option \"--os-cloud\".",
              "patchSetTimestamp": 1536348809000
            },
            {
              "file": "releasenotes/notes/share-openstack-images-4f1e3d18fdcb488b.yaml",
              "line": 8,
              "reviewer": ids["zxiiro"],
              "message": "nope, that\u0027s not needed, the better way to do it actually is:\n\n export OS_CLOUD\u003dodl\n\nThen you never have to specify it again. This true for all \"openstack\" commands so I don\u0027t think it needs to be made explicit for every sub-command of \"openstack\".",
              "patchSetTimestamp": 1536348809000
            }
          ],
          "sizeInsertions": 98,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I1f6072fbfff003a4602d3765a6a5ce7c94fe4c58",
      "commitNumber": 12498,
      "subject": "Add cmd to upload openstack images",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12498",
      "commitMessage": "Add cmd to upload openstack images\n\nIssue: RELENG-1201\nChange-Id: I1f6072fbfff003a4602d3765a6a5ce7c94fe4c58\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1536347377000,
      "lastUpdatedDate": 1536351502000,
      "isOpen": true,
      "status": "NEW",
      "reviewers": [
        ids["lf-jenkins"],
        ids["zxiiro"]
      ],
      "comments": [
        {
          "timestamp": 1536347377000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536347397000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2: Commit message was updated."
        },
        {
          "timestamp": 1536347447000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3: Commit message was updated."
        },
        {
          "timestamp": 1536347458000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/295/"
        },
        {
          "timestamp": 1536347496000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/296/"
        },
        {
          "timestamp": 1536347543000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/297/"
        },
        {
          "timestamp": 1536347682000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/295/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/295/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/295"
        },
        {
          "timestamp": 1536347708000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/296/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/296/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/296"
        },
        {
          "timestamp": 1536347757000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/297/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/297/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/297"
        },
        {
          "timestamp": 1536348809000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1536348937000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/299/"
        },
        {
          "timestamp": 1536349118000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/299/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/299"
        },
        {
          "timestamp": 1536349259000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1536351502000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4: Code-Review+1\n\nWould be nice to have but I\u0027m not going to block this change on the sha256sum. The servers that have the cloudimgs store them inside a single file that we\u0027d have to parse. There\u0027s no easy automated way where we can just fetch a 2nd file with the similar name."
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "183e8645d0e3eec508f207b89c2eeeb58d6db342",
          "parents": [
            "3b44464f6fe101ef6f19c15911092ce0be32bef5"
          ],
          "ref": "refs/changes/98/12498/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536347377000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1536347682000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 44,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "40e7e5a3c342015ae53ed3e0de0bc2ca56056034",
          "parents": [
            "3b44464f6fe101ef6f19c15911092ce0be32bef5"
          ],
          "ref": "refs/changes/98/12498/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536347397000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "NO_CODE_CHANGE",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1536347708000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 44,
          "sizeDeletions": 0
        },
        {
          "number": 3,
          "revision": "774481773cee5fcacfa7e73e0cbee8d514c95e40",
          "parents": [
            "3b44464f6fe101ef6f19c15911092ce0be32bef5"
          ],
          "ref": "refs/changes/98/12498/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536347447000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "NO_CODE_CHANGE",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1536347757000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 44,
          "sizeDeletions": 0
        },
        {
          "number": 4,
          "revision": "2aa73e8b4efaa399002983f04bc5a85089402301",
          "parents": [
            "50ce256a1e792c82f409c7b66b7b8bad1a9b5a37"
          ],
          "ref": "refs/changes/98/12498/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536348809000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1536351502000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536349118000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "lftools/openstack/image.py",
              "line": 196,
              "reviewer": ids["zxiiro"],
              "message": "We should probably verify the checksum of the downloaded file.",
              "patchSetTimestamp": 1536348809000
            }
          ],
          "sizeInsertions": 45,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "Ic5f4de1af139e0cf99e955a30e3d957772563f57",
      "commitNumber": 12496,
      "subject": "Use reno 2.10.0 and remove reno.yaml",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12496",
      "commitMessage": "Use reno 2.10.0 and remove reno.yaml\n\nReno 2.10.0 supports our regex pattern so we no longer need to\nconfigure it.\n\nAlso add reno to tox so that people can run it via:\n\n    tox -e reno new slug\n\nChange-Id: Ic5f4de1af139e0cf99e955a30e3d957772563f57\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1536340620000,
      "lastUpdatedDate": 1536345719000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["jwagantall"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1536340620000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536340798000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/292/"
        },
        {
          "timestamp": 1536340839000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1536340960000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/292/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/292"
        },
        {
          "timestamp": 1536345713000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1536345719000,
          "reviewer": ids["jwagantall"],
          "message": "Change has been successfully merged by Jessica Wagantall"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "cbf23405ee4da28adbfd63b323e12e1922c62ffe",
          "parents": [
            "f5988d8e61013b13643575782b8418f31df65a3c"
          ],
          "ref": "refs/changes/96/12496/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536340620000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536340839000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536345713000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536345719000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536340960000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 5,
          "sizeDeletions": -2
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I8ccd3ba8ff02a43db043cfca842645dd1dccd89c",
      "commitNumber": 12497,
      "subject": "Remove prelude",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12497",
      "commitMessage": "Remove prelude\n\nThis prelude did not make much sense for the patch the introduced it.\n\nChange-Id: I8ccd3ba8ff02a43db043cfca842645dd1dccd89c\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1536341106000,
      "lastUpdatedDate": 1536345300000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["jwagantall"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1536341106000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536341142000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1536341584000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/293/"
        },
        {
          "timestamp": 1536341788000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/293/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/293"
        },
        {
          "timestamp": 1536345153000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1536345300000,
          "reviewer": ids["jwagantall"],
          "message": "Change has been successfully merged by Jessica Wagantall"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "de992398836117670b1271f63871755f8cac46a7",
          "parents": [
            "f5988d8e61013b13643575782b8418f31df65a3c"
          ],
          "ref": "refs/changes/97/12497/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536341106000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536341142000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536345153000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536345300000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536341788000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 0,
          "sizeDeletions": -5
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I61ba5010034684374f99e9c909d854be750f7735",
      "commitNumber": 12399,
      "subject": "Add unit test for config subsystem",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12399",
      "commitMessage": "Add unit test for config subsystem\n\nChange-Id: I61ba5010034684374f99e9c909d854be750f7735\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535337301000,
      "lastUpdatedDate": 1536273659000,
      "isOpen": true,
      "status": "DRAFT",
      "reviewers": [],
      "comments": [
        {
          "timestamp": 1535337301000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536273659000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2: Patch Set 1 was rebased."
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "860c9a8c8d9aa25201723b5278a5b39b5c2f75ae",
          "parents": [
            "e1215526be2d06177b551c7a65e6858bf385f4e2"
          ],
          "ref": "refs/changes/99/12399/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535337301000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 29,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "bb2b9fdfacafbc2ca1084315f8ea5486e6e66711",
          "parents": [
            "f5988d8e61013b13643575782b8418f31df65a3c"
          ],
          "ref": "refs/changes/99/12399/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536273659000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "TRIVIAL_REBASE",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 29,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "Ifa5ebace74db851e00fb2431ef06f38952ec3e24",
      "commitNumber": 12393,
      "subject": "Add npm metadata to .gitignore",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12393",
      "commitMessage": "Add npm metadata to .gitignore\n\nChange-Id: Ifa5ebace74db851e00fb2431ef06f38952ec3e24\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535175731000,
      "lastUpdatedDate": 1536247071000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["agrimberg"]
      ],
      "comments": [
        {
          "timestamp": 1535175731000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535175919000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/273/"
        },
        {
          "timestamp": 1535176138000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/273/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/273"
        },
        {
          "timestamp": 1536246365000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2: Patch Set 1 was rebased."
        },
        {
          "timestamp": 1536246588000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/291/"
        },
        {
          "timestamp": 1536246809000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/291/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/291"
        },
        {
          "timestamp": 1536247069000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1536247071000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "2f9e4807bda2006b89323738e150cb33c0a134e6",
          "parents": [
            "3a409e15b5ad16715525fc86ad163f61b890645f"
          ],
          "ref": "refs/changes/93/12393/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535175731000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535176138000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 4,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "f5988d8e61013b13643575782b8418f31df65a3c",
          "parents": [
            "043bea105c6c12ee26ecc0738edbff4a5ed03c7c"
          ],
          "ref": "refs/changes/93/12393/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536246365000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536247069000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536247071000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536246809000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 4,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "Ied7ff51a292199675dc944e36f1d821a5a2d045d",
      "commitNumber": 12353,
      "subject": "Add stack create \u0026 delete commands",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12353",
      "commitMessage": "Add stack create \u0026 delete commands\n\nAdd 2 new commands:\n\n    - stack create\n    - stack delete\n\nThese commands allow lftools the ability to create and delete stacks.\n\nIssue: RELENG-235\nChange-Id: Ied7ff51a292199675dc944e36f1d821a5a2d045d\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1534892757000,
      "lastUpdatedDate": 1536245697000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["zxiiro"],
        ids["shague"],
        ids["jluhrsen"],
        ids["ecelgp"]
      ],
      "comments": [
        {
          "timestamp": 1534892757000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1534899122000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1535070930000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1535071011000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/44/ (1/2)"
        },
        {
          "timestamp": 1535071057000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/247/ (2/2)"
        },
        {
          "timestamp": 1535071242000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/247/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/247/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/247\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/44/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/44"
        },
        {
          "timestamp": 1535071402000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1535071483000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/45/ (1/2)"
        },
        {
          "timestamp": 1535071544000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/248/ (2/2)"
        },
        {
          "timestamp": 1535071737000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/45/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/45\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/248/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/248"
        },
        {
          "timestamp": 1536107417000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4:\n\n@Jamo,Luis,Sam, Just FYI since this affects CSIT jobs."
        },
        {
          "timestamp": 1536245248000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4: Code-Review+1"
        },
        {
          "timestamp": 1536245695000,
          "reviewer": ids["shague"],
          "message": "Patch Set 4: Code-Review+2"
        },
        {
          "timestamp": 1536245697000,
          "reviewer": ids["shague"],
          "message": "Change has been successfully merged by Sam Hague"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "f081ab69eb047d734aa85fe7b6d7df59fbcbabc4",
          "parents": [
            "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
          ],
          "ref": "refs/changes/53/12353/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534892757000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 68,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "1b2fd8f547dc3d3523aa5e8134c2e33cf440338c",
          "parents": [
            "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
          ],
          "ref": "refs/changes/53/12353/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534899122000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 168,
          "sizeDeletions": 0
        },
        {
          "number": 3,
          "revision": "ead2f50016c1bfd67b99fa1dce3807d9d4c26800",
          "parents": [
            "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
          ],
          "ref": "refs/changes/53/12353/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535070930000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535071242000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 208,
          "sizeDeletions": 0
        },
        {
          "number": 4,
          "revision": "0a5942299f83aaa74da3bf1fdf985d4003ce30f3",
          "parents": [
            "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
          ],
          "ref": "refs/changes/53/12353/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535071402000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1536245248000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536245695000,
              "grantedBy": ids["shague"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536245697000,
              "grantedBy": ids["shague"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535071737000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 209,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I2481a364b9ddf2aa0ba9e2168d4ee408ca477c43",
      "commitNumber": 12400,
      "subject": "Deduplicate test requirements",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12400",
      "commitMessage": "Deduplicate test requirements\n\nSome of these tests being pulled in are duplicates. Let\u0027s consolidate\ninto requirements-test.txt as the source of truth.\n\nChange-Id: I2481a364b9ddf2aa0ba9e2168d4ee408ca477c43\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535338093000,
      "lastUpdatedDate": 1536245688000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["shague"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1535338093000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535338170000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/286/"
        },
        {
          "timestamp": 1535338399000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/286/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/286"
        },
        {
          "timestamp": 1536245214000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1536245686000,
          "reviewer": ids["shague"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1536245688000,
          "reviewer": ids["shague"],
          "message": "Change has been successfully merged by Sam Hague"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "06c14a57395db7be8d17230ae245a0b083c4daad",
          "parents": [
            "3a409e15b5ad16715525fc86ad163f61b890645f"
          ],
          "ref": "refs/changes/00/12400/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535338093000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1536245214000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536245686000,
              "grantedBy": ids["shague"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536245688000,
              "grantedBy": ids["shague"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535338399000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 6,
          "sizeDeletions": -7
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I31329886088d8d7a469e19bc0937912546400109",
      "commitNumber": 12398,
      "subject": "Use logger instead of print in version module",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12398",
      "commitMessage": "Use logger instead of print in version module\n\nChange-Id: I31329886088d8d7a469e19bc0937912546400109\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535333153000,
      "lastUpdatedDate": 1536245625000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["zxiiro"],
        ids["shague"]
      ],
      "comments": [
        {
          "timestamp": 1535333153000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535333342000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/282/"
        },
        {
          "timestamp": 1535333579000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/282/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/282/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/282"
        },
        {
          "timestamp": 1535336133000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1535336312000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/285/"
        },
        {
          "timestamp": 1535336516000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/285/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/285"
        },
        {
          "timestamp": 1535410641000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3: Patch Set 2 was rebased."
        },
        {
          "timestamp": 1535410875000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/290/"
        },
        {
          "timestamp": 1535411065000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/290/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/290"
        },
        {
          "timestamp": 1536245282000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3: Code-Review+1"
        },
        {
          "timestamp": 1536245586000,
          "reviewer": ids["shague"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1536245625000,
          "reviewer": ids["shague"],
          "message": "Change has been successfully merged by Sam Hague"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "6b091837d9d9ce8e1b6e6172c1030850578551a4",
          "parents": [
            "000bc7ba0ec40ea6c00f54fe8dc73c2ffd7f6d5a"
          ],
          "ref": "refs/changes/98/12398/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535333153000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535333579000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1,
          "sizeDeletions": -1
        },
        {
          "number": 2,
          "revision": "e1215526be2d06177b551c7a65e6858bf385f4e2",
          "parents": [
            "6d4440a03abada50e2705418f4628047828a0420"
          ],
          "ref": "refs/changes/98/12398/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535336133000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535336516000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 4,
          "sizeDeletions": -1
        },
        {
          "number": 3,
          "revision": "d10d79b4b8b0a95da454aa05436990c608247182",
          "parents": [
            "2e5148cb27a9413a96596ae2fd43bdaba518231e"
          ],
          "ref": "refs/changes/98/12398/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535410641000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1536245282000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536245586000,
              "grantedBy": ids["shague"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536245625000,
              "grantedBy": ids["shague"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535411065000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 4,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I47235cf9accd362ba1355ff77e15757543d30da1",
      "commitNumber": 12397,
      "subject": "Update config subsystem to use logger",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12397",
      "commitMessage": "Update config subsystem to use logger\n\nUse our logger service in the config subsystem.\n\nChange-Id: I47235cf9accd362ba1355ff77e15757543d30da1\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535331970000,
      "lastUpdatedDate": 1536245625000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["zxiiro"],
        ids["shague"]
      ],
      "comments": [
        {
          "timestamp": 1535331970000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535332386000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/279/"
        },
        {
          "timestamp": 1535332617000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/279/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/279/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/279"
        },
        {
          "timestamp": 1535332996000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1535333114000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/281/"
        },
        {
          "timestamp": 1535333361000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/281/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/281/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/281"
        },
        {
          "timestamp": 1535336133000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1535336297000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/284/"
        },
        {
          "timestamp": 1535336509000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/284/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/284"
        },
        {
          "timestamp": 1535410641000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4: Patch Set 3 was rebased."
        },
        {
          "timestamp": 1535410838000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/289/"
        },
        {
          "timestamp": 1535411097000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/289/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/289"
        },
        {
          "timestamp": 1536245272000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4: Code-Review+1"
        },
        {
          "timestamp": 1536245541000,
          "reviewer": ids["shague"],
          "message": "Patch Set 4: Code-Review+2"
        },
        {
          "timestamp": 1536245625000,
          "reviewer": ids["shague"],
          "message": "Change has been successfully merged by Sam Hague"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "42a2e7a9d9f6c2aa2bb26ee0745816b98d5b7ebe",
          "parents": [
            "8432e5bc9342a5d8bebe47abcfddbd1b48f5f27b"
          ],
          "ref": "refs/changes/97/12397/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535331970000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535332617000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 6,
          "sizeDeletions": -2
        },
        {
          "number": 2,
          "revision": "000bc7ba0ec40ea6c00f54fe8dc73c2ffd7f6d5a",
          "parents": [
            "0768f14a36b356d27f855023ecdb8df2aa336210"
          ],
          "ref": "refs/changes/97/12397/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535332996000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535333361000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 9,
          "sizeDeletions": -5
        },
        {
          "number": 3,
          "revision": "6d4440a03abada50e2705418f4628047828a0420",
          "parents": [
            "a0c3e6240ecdfddaa940d298b5081d1c00761f03"
          ],
          "ref": "refs/changes/97/12397/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535336133000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535336509000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 11,
          "sizeDeletions": -5
        },
        {
          "number": 4,
          "revision": "2e5148cb27a9413a96596ae2fd43bdaba518231e",
          "parents": [
            "4edf459161faeaebe1614ff16f18101f0785adc6"
          ],
          "ref": "refs/changes/97/12397/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535410641000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1536245272000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536245541000,
              "grantedBy": ids["shague"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536245625000,
              "grantedBy": ids["shague"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535411097000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 11,
          "sizeDeletions": -5
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "Ic35222ee654306e686052c209b641f9e49d38144",
      "commitNumber": 12390,
      "subject": "Only print extra log details in DEBUG mode",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12390",
      "commitMessage": "Only print extra log details in DEBUG mode\n\nThis allow us to change all our print statements to log.info() and\nhave it still print sanely like a CLI application. Then when DEBUG\nmode is enabled it will print the extra details to let us\ntroubleshoot. ERROR and CRITICAL logs will prefix with \"ERROR: \"\nfor example.\n\nChange-Id: Ic35222ee654306e686052c209b641f9e49d38144\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535159160000,
      "lastUpdatedDate": 1536245625000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["zxiiro"],
        ids["shague"]
      ],
      "comments": [
        {
          "timestamp": 1535159160000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535159341000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1535159575000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/267/"
        },
        {
          "timestamp": 1535159629000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/268/"
        },
        {
          "timestamp": 1535159784000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/267/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/267/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/267"
        },
        {
          "timestamp": 1535159838000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/268/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/268/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/268"
        },
        {
          "timestamp": 1535159848000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1535159935000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/269/"
        },
        {
          "timestamp": 1535160184000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/269/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/269"
        },
        {
          "timestamp": 1535331018000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1535331084000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/277/"
        },
        {
          "timestamp": 1535331302000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/277/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/277/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/277"
        },
        {
          "timestamp": 1535331970000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 5."
        },
        {
          "timestamp": 1535332047000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/278/"
        },
        {
          "timestamp": 1535332289000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/278/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/278/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/278"
        },
        {
          "timestamp": 1535332996000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 6."
        },
        {
          "timestamp": 1535333067000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/280/"
        },
        {
          "timestamp": 1535333294000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/280/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/280"
        },
        {
          "timestamp": 1535336133000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 7."
        },
        {
          "timestamp": 1535336241000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/283/"
        },
        {
          "timestamp": 1535336490000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/283/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/283"
        },
        {
          "timestamp": 1535410641000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 8."
        },
        {
          "timestamp": 1535410755000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/288/"
        },
        {
          "timestamp": 1535410991000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/288/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/288"
        },
        {
          "timestamp": 1536245294000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 8: Code-Review+1"
        },
        {
          "timestamp": 1536245533000,
          "reviewer": ids["shague"],
          "message": "Patch Set 8: Code-Review+2"
        },
        {
          "timestamp": 1536245625000,
          "reviewer": ids["shague"],
          "message": "Change has been successfully merged by Sam Hague"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "a8d91d5ed91aff72e0c0bb859ada7f94af435ad5",
          "parents": [
            "3a409e15b5ad16715525fc86ad163f61b890645f"
          ],
          "ref": "refs/changes/90/12390/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535159160000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535159784000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 15,
          "sizeDeletions": -5
        },
        {
          "number": 2,
          "revision": "0a06d5fe31a4a958ee2cd04c45ad1fb2c7a45373",
          "parents": [
            "3a409e15b5ad16715525fc86ad163f61b890645f"
          ],
          "ref": "refs/changes/90/12390/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535159341000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535159838000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 13,
          "sizeDeletions": -2
        },
        {
          "number": 3,
          "revision": "7ddb787508793ff402ff30c2c296fb66218e7b91",
          "parents": [
            "3a409e15b5ad16715525fc86ad163f61b890645f"
          ],
          "ref": "refs/changes/90/12390/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535159848000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535160184000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 14,
          "sizeDeletions": -2
        },
        {
          "number": 4,
          "revision": "4c22dec1bf62f9c8c6b6323fe500ca5d6e2d9be9",
          "parents": [
            "3a409e15b5ad16715525fc86ad163f61b890645f"
          ],
          "ref": "refs/changes/90/12390/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535331018000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535331302000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 17,
          "sizeDeletions": -2
        },
        {
          "number": 5,
          "revision": "8432e5bc9342a5d8bebe47abcfddbd1b48f5f27b",
          "parents": [
            "3a409e15b5ad16715525fc86ad163f61b890645f"
          ],
          "ref": "refs/changes/90/12390/5",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535331970000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535332289000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 19,
          "sizeDeletions": -2
        },
        {
          "number": 6,
          "revision": "0768f14a36b356d27f855023ecdb8df2aa336210",
          "parents": [
            "3a409e15b5ad16715525fc86ad163f61b890645f"
          ],
          "ref": "refs/changes/90/12390/6",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535332996000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535333294000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 20,
          "sizeDeletions": -2
        },
        {
          "number": 7,
          "revision": "a0c3e6240ecdfddaa940d298b5081d1c00761f03",
          "parents": [
            "3a409e15b5ad16715525fc86ad163f61b890645f"
          ],
          "ref": "refs/changes/90/12390/7",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535336133000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535336490000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 22,
          "sizeDeletions": -4
        },
        {
          "number": 8,
          "revision": "4edf459161faeaebe1614ff16f18101f0785adc6",
          "parents": [
            "bf6ca83a3f20a15dd83800f3953cc3f5e449250b"
          ],
          "ref": "refs/changes/90/12390/8",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535410641000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1536245294000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536245533000,
              "grantedBy": ids["shague"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536245625000,
              "grantedBy": ids["shague"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535410991000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 28,
          "sizeDeletions": -4
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I4ac1ce147ada7176cdac399b83edc646973dd80e",
      "commitNumber": 12504,
      "subject": "Use Reno for release notes",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12504",
      "commitMessage": "Use Reno for release notes\n\nChange-Id: I4ac1ce147ada7176cdac399b83edc646973dd80e\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1536361846000,
      "lastUpdatedDate": 1536366483000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["jwagantall"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1536361846000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536361912000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1536361956000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/311/ (1/2)"
        },
        {
          "timestamp": 1536362006000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/743/ (2/2)"
        },
        {
          "timestamp": 1536362182000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/311/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/311\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/743/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/743"
        },
        {
          "timestamp": 1536363141000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 1:\n\n(1 comment)"
        },
        {
          "timestamp": 1536366227000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\n(1 comment)"
        },
        {
          "timestamp": 1536366481000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1536366483000,
          "reviewer": ids["jwagantall"],
          "message": "Change has been successfully merged by Jessica Wagantall"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "67aa548eb9d34b53810478b7c972cf005e72b431",
          "parents": [
            "baacf438b7128ac60b458398219467235fcef9b1"
          ],
          "ref": "refs/changes/04/12504/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536361846000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1536361912000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536366481000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536366483000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536362182000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "docs/release-notes.rst",
              "line": 1,
              "reviewer": ids["jwagantall"],
              "message": "Is this meant to be empty?\n\nOr are we just adding the space for now?",
              "patchSetTimestamp": 1536361846000
            },
            {
              "file": "docs/release-notes.rst",
              "line": 1,
              "reviewer": ids["zxiiro"],
              "message": "This is entirely auto-generated by reno when you run `tox -e docs`. \".. release-notes::\" is the directive that tells reno to take over and run. We don\u0027t need to do anything here other than define this one line :)",
              "patchSetTimestamp": 1536361846000
            }
          ],
          "sizeInsertions": 5,
          "sizeDeletions": -2
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I0ff965c2ef24fa7a44a114445d8a97c3176e575a",
      "commitNumber": 12312,
      "subject": "Add sigul signing to maven-stage job",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12312",
      "commitMessage": "Add sigul signing to maven-stage job\n\nChange-Id: I0ff965c2ef24fa7a44a114445d8a97c3176e575a\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1534558526000,
      "lastUpdatedDate": 1536362251000,
      "isOpen": true,
      "status": "DRAFT",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"]
      ],
      "comments": [
        {
          "timestamp": 1534558526000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1534558567000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review-1\n\nI just realized that lf-sigul-install only supports CentOS. Can sigul run on other distros?"
        },
        {
          "timestamp": 1534558636000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1534559558000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review-1\n\nHitting this issue:\n\n22:31:47 ---\u003e sigul-configuration.sh\n22:31:47 gpg: CAST5 encrypted data\n22:31:47 gpg: encrypted with 1 passphrase\n22:31:47 gpg: handle plaintext failed: General error\n22:31:47 gpg: WARNING: message was not integrity protected\n22:31:47 Build step \u0027Execute shell\u0027 marked build as failure"
        },
        {
          "timestamp": 1534876103000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 2:\n\n\u003e I just realized that lf-sigul-install only supports CentOS. Can\n \u003e sigul run on other distros?\n\nSigul itself is a python app. So, it should be able to. Though I don\u0027t know if it\u0027s available in PyPi or not."
        },
        {
          "timestamp": 1535407868000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1536361430000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4: Patch Set 3 was rebased."
        },
        {
          "timestamp": 1536362139000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 5."
        },
        {
          "timestamp": 1536362182000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4:\n\nI wonder if we should actually make sigul optional. Although with all those \"builder\" steps they are basically forced to setup sigul anyway. Not sure if there\u0027s a clean way to get the system setup."
        },
        {
          "timestamp": 1536362251000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 5:\n\n\u003e I wonder if we should actually make sigul optional. Although with\n \u003e all those \"builder\" steps they are basically forced to setup sigul\n \u003e anyway. Not sure if there\u0027s a clean way to get the system setup.\n\nI would like to make it optional, but I don\u0027t know how unless we do separate templates that do and don\u0027t have it."
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "5f0b4422ded20940dcce964260eeb45cfbffdea3",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/12/12312/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534558526000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1534558567000,
              "grantedBy": ids["zxiiro"]
            }
          ],
          "comments": [],
          "sizeInsertions": 6,
          "sizeDeletions": -1
        },
        {
          "number": 2,
          "revision": "3fad4e1c83d21a4a16038db8101a0fc8207ab221",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/12/12312/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534558636000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1534559558000,
              "grantedBy": ids["zxiiro"]
            }
          ],
          "comments": [],
          "sizeInsertions": 6,
          "sizeDeletions": -1
        },
        {
          "number": 3,
          "revision": "ecb928a5d08b69739e71c41f5091a28c47bb6b6e",
          "parents": [
            "73c1e4ad26a06e40fee8e08aad09ed3831b4cdf6"
          ],
          "ref": "refs/changes/12/12312/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535407868000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 5,
          "sizeDeletions": 0
        },
        {
          "number": 4,
          "revision": "aeddc05604e3c741e656f1c9b3ca84462879161f",
          "parents": [
            "baacf438b7128ac60b458398219467235fcef9b1"
          ],
          "ref": "refs/changes/12/12312/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536361430000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "TRIVIAL_REBASE",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 5,
          "sizeDeletions": 0
        },
        {
          "number": 5,
          "revision": "64c92383808217a01eb46103aedf50a3dd79d42e",
          "parents": [
            "baacf438b7128ac60b458398219467235fcef9b1"
          ],
          "ref": "refs/changes/12/12312/5",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536362139000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 9,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I945735ecd50596605139c6522903a49350a1ea10",
      "commitNumber": 12395,
      "subject": "Refactor job-groups documentation",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12395",
      "commitMessage": "Refactor job-groups documentation\n\nImprove the way job-groups are documented so that it stays properly\nin sync. This update recommends projects define their own job-groups\nand using the ones defined in global-jjb only as a starting point.\n\nUpdate ensure-documented to ignore job-groups since they should be\nself documenting now in the new format.\n\nChange-Id: I945735ecd50596605139c6522903a49350a1ea10\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535210745000,
      "lastUpdatedDate": 1536246492000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["agrimberg"],
        ids["zxiiro"]
      ],
      "comments": [
        {
          "timestamp": 1535210745000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535210853000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/309/ (1/2)"
        },
        {
          "timestamp": 1535210881000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/739/ (2/2)"
        },
        {
          "timestamp": 1535211048000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/739/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/739/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/739\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/309/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/309"
        },
        {
          "timestamp": 1535211122000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1535211227000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/310/ (1/2)"
        },
        {
          "timestamp": 1535211266000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/740/ (2/2)"
        },
        {
          "timestamp": 1535211433000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/310/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/310\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/740/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/740"
        },
        {
          "timestamp": 1536245622000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review+1"
        },
        {
          "timestamp": 1536246490000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1536246492000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "c29cee3c20a8fcdd2fb439839a08a7a374ec1741",
          "parents": [
            "e96029d01d65803befad00623129086262c3ccb3"
          ],
          "ref": "refs/changes/95/12395/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535210745000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535211048000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 199,
          "sizeDeletions": -288
        },
        {
          "number": 2,
          "revision": "f4e0e413849367f8f71bc4cb9098e282c0ac206e",
          "parents": [
            "e96029d01d65803befad00623129086262c3ccb3"
          ],
          "ref": "refs/changes/95/12395/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535211122000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536246490000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536246492000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1536245622000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535211433000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 199,
          "sizeDeletions": -288
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Iddc98ccc4d4f8f3bfc3650eec3b5bab7f156db3b",
      "commitNumber": 12394,
      "subject": "Remove maven-merge job todo",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12394",
      "commitMessage": "Remove maven-merge job todo\n\nThis is completed.\n\nChange-Id: Iddc98ccc4d4f8f3bfc3650eec3b5bab7f156db3b\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535210745000,
      "lastUpdatedDate": 1536246345000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1535210745000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535210875000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/738/"
        },
        {
          "timestamp": 1535211053000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/738/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/738"
        },
        {
          "timestamp": 1536245626000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1536246342000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1536246345000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "e96029d01d65803befad00623129086262c3ccb3",
          "parents": [
            "73c1e4ad26a06e40fee8e08aad09ed3831b4cdf6"
          ],
          "ref": "refs/changes/94/12394/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535210745000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536246342000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536246345000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1536245626000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535211053000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 0,
          "sizeDeletions": -2
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I02f0397ae5627f65638a456ba2f1304dd9a16de9",
      "commitNumber": 12461,
      "subject": "Strip out trailing metadata from version",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12461",
      "commitMessage": "Strip out trailing metadata from version\n\nWhen manually building maven plugins maven puts in some metadata\nlike \"2.38-SNAPSHOT (private-9853d407-zxiiro)\" which throws off the\nversion_ge function as it does not know how to handle a version with\na space in the name. This change strips out only the leading version\nignoring everything after a space.\n\nChange-Id: I02f0397ae5627f65638a456ba2f1304dd9a16de9\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1536166054000,
      "lastUpdatedDate": 1536166606000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["jluhrsen"]
      ],
      "comments": [
        {
          "timestamp": 1536166054000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536166365000,
          "reviewer": ids["jluhrsen"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1536166425000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/742/"
        },
        {
          "timestamp": 1536166598000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/742/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/742"
        },
        {
          "timestamp": 1536166606000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha (zxiiro)"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "8bab321b9a1713ac4c2b4bf6814dd4fc4b9f27f4",
          "parents": [
            "73c1e4ad26a06e40fee8e08aad09ed3831b4cdf6"
          ],
          "ref": "refs/changes/61/12461/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536166054000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536166606000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536166598000,
              "grantedBy": ids["lf-jenkins"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536166365000,
              "grantedBy": ids["jluhrsen"]
            }
          ],
          "comments": [],
          "sizeInsertions": 2,
          "sizeDeletions": -1
        }
      ]
    }
  ],
  "addedAsReviewerTo": [],
  "reviewRequestors": [],
  "commentsWritten": [],
  "commentsReceived": [
    {
      "commit": {
        "project": "releng/global-jjb",
        "branch": "master",
        "id": "I4ac1ce147ada7176cdac399b83edc646973dd80e",
        "commitNumber": 12504,
        "subject": "Use Reno for release notes",
        "owner": ids["zxiiro"],
        "url": "https://gerrit.linuxfoundation.org/infra/12504",
        "commitMessage": "Use Reno for release notes\n\nChange-Id: I4ac1ce147ada7176cdac399b83edc646973dd80e\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
        "createdOnDate": 1536361846000,
        "lastUpdatedDate": 1536366483000,
        "isOpen": false,
        "status": "MERGED",
        "reviewers": [
          ids["zxiiro"],
          ids["jwagantall"],
          ids["lf-jenkins"]
        ],
        "comments": [
          {
            "timestamp": 1536361846000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1536361912000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 1: Code-Review+1"
          },
          {
            "timestamp": 1536361956000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/311/ (1/2)"
          },
          {
            "timestamp": 1536362006000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/743/ (2/2)"
          },
          {
            "timestamp": 1536362182000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/311/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/311\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/743/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/743"
          },
          {
            "timestamp": 1536363141000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 1:\n\n(1 comment)"
          },
          {
            "timestamp": 1536366227000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 1:\n\n(1 comment)"
          },
          {
            "timestamp": 1536366481000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 1: Code-Review+2"
          },
          {
            "timestamp": 1536366483000,
            "reviewer": ids["jwagantall"],
            "message": "Change has been successfully merged by Jessica Wagantall"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "67aa548eb9d34b53810478b7c972cf005e72b431",
            "parents": [
              "baacf438b7128ac60b458398219467235fcef9b1"
            ],
            "ref": "refs/changes/04/12504/1",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1536361846000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1536361912000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1536366481000,
                "grantedBy": ids["jwagantall"]
              },
              {
                "type": "SUBM",
                "description": "",
                "value": 1,
                "grantedOnDate": 1536366483000,
                "grantedBy": ids["jwagantall"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1536362182000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "docs/release-notes.rst",
                "line": 1,
                "reviewer": ids["jwagantall"],
                "message": "Is this meant to be empty?\n\nOr are we just adding the space for now?",
                "patchSetTimestamp": 1536361846000
              },
              {
                "file": "docs/release-notes.rst",
                "line": 1,
                "reviewer": ids["zxiiro"],
                "message": "This is entirely auto-generated by reno when you run `tox -e docs`. \".. release-notes::\" is the directive that tells reno to take over and run. We don\u0027t need to do anything here other than define this one line :)",
                "patchSetTimestamp": 1536361846000
              }
            ],
            "sizeInsertions": 5,
            "sizeDeletions": -2
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "docs/release-notes.rst",
          "line": 1,
          "reviewer": ids["jwagantall"],
          "message": "Is this meant to be empty?\n\nOr are we just adding the space for now?",
          "patchSetTimestamp": 1536361846000
        }
      ]
    },
    {
      "commit": {
        "project": "releng/lftools",
        "branch": "master",
        "id": "I58dc200f7b29429ee1215bacdc533d234ad153fb",
        "commitNumber": 12483,
        "subject": "Add cmd to share openstack images",
        "owner": ids["zxiiro"],
        "url": "https://gerrit.linuxfoundation.org/infra/12483",
        "commitMessage": "Add cmd to share openstack images\n\nAllows us to more easily share images to multiple openstack tenants.\n\nIssue: RELENG-1201\nChange-Id: I58dc200f7b29429ee1215bacdc533d234ad153fb\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
        "createdOnDate": 1536289612000,
        "lastUpdatedDate": 1536358056000,
        "isOpen": true,
        "status": "NEW",
        "reviewers": [
          ids["zxiiro"],
          ids["lf-jenkins"],
          ids["jwagantall"]
        ],
        "comments": [
          {
            "timestamp": 1536289612000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1536289708000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 2."
          },
          {
            "timestamp": 1536289747000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 3: Commit message was updated."
          },
          {
            "timestamp": 1536335586000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 3: Code-Review-1\n\nDon\u0027t forget reno notes."
          },
          {
            "timestamp": 1536341796000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 4."
          },
          {
            "timestamp": 1536341979000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/294/"
          },
          {
            "timestamp": 1536342152000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/294/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/294"
          },
          {
            "timestamp": 1536348809000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 5: Patch Set 4 was rebased."
          },
          {
            "timestamp": 1536348885000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/298/"
          },
          {
            "timestamp": 1536349132000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 5: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/298/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/298"
          },
          {
            "timestamp": 1536349628000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 5:\n\nI want to test this.. let me do that and then I can post my review.."
          },
          {
            "timestamp": 1536351972000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 5:\n\n(1 comment)"
          },
          {
            "timestamp": 1536352342000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 5:\n\n(1 comment)"
          },
          {
            "timestamp": 1536358056000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 5:\n\n(1 comment)"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "4c8a4cd76b2fd88b72cf9749000511031bdd581b",
            "parents": [
              "f5988d8e61013b13643575782b8418f31df65a3c"
            ],
            "ref": "refs/changes/83/12483/1",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1536289612000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 86,
            "sizeDeletions": -1
          },
          {
            "number": 2,
            "revision": "1a935890675c3c7d2f06ef17fd1434f3eb53156a",
            "parents": [
              "f5988d8e61013b13643575782b8418f31df65a3c"
            ],
            "ref": "refs/changes/83/12483/2",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1536289708000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 86,
            "sizeDeletions": 0
          },
          {
            "number": 3,
            "revision": "a9bc42abee5750f4d5da89bc8cf5bf02fae2e196",
            "parents": [
              "f5988d8e61013b13643575782b8418f31df65a3c"
            ],
            "ref": "refs/changes/83/12483/3",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1536289747000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "NO_CODE_CHANGE",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1536335586000,
                "grantedBy": ids["zxiiro"]
              }
            ],
            "comments": [],
            "sizeInsertions": 86,
            "sizeDeletions": 0
          },
          {
            "number": 4,
            "revision": "3b44464f6fe101ef6f19c15911092ce0be32bef5",
            "parents": [
              "f5988d8e61013b13643575782b8418f31df65a3c"
            ],
            "ref": "refs/changes/83/12483/4",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1536341796000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1536342152000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 98,
            "sizeDeletions": 0
          },
          {
            "number": 5,
            "revision": "50ce256a1e792c82f409c7b66b7b8bad1a9b5a37",
            "parents": [
              "ea7f2b8aaab8224860e82504109d4357eba00ec2"
            ],
            "ref": "refs/changes/83/12483/5",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1536348809000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "TRIVIAL_REBASE",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1536349132000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "releasenotes/notes/share-openstack-images-4f1e3d18fdcb488b.yaml",
                "line": 8,
                "reviewer": ids["jwagantall"],
                "message": "This command needs to specify that \"os-cloud\" option is required. \nFor example:\nlftools openstack --os-cloud \u003ccloud\u003e image share ...",
                "patchSetTimestamp": 1536348809000
              },
              {
                "file": "releasenotes/notes/share-openstack-images-4f1e3d18fdcb488b.yaml",
                "line": 8,
                "reviewer": ids["jwagantall"],
                "message": "I think there is a conflict of usage messages, is it?\nFor example:\n\n(lftools-dev) jessicag@jessicag:~/linuxfoundation/lftools-dev/lftools$ lftools openstack image share --help\nUsage: lftools openstack [OPTIONS] COMMAND [ARGS]...\n\nError: Missing option \"--os-cloud\".",
                "patchSetTimestamp": 1536348809000
              },
              {
                "file": "releasenotes/notes/share-openstack-images-4f1e3d18fdcb488b.yaml",
                "line": 8,
                "reviewer": ids["zxiiro"],
                "message": "nope, that\u0027s not needed, the better way to do it actually is:\n\n export OS_CLOUD\u003dodl\n\nThen you never have to specify it again. This true for all \"openstack\" commands so I don\u0027t think it needs to be made explicit for every sub-command of \"openstack\".",
                "patchSetTimestamp": 1536348809000
              }
            ],
            "sizeInsertions": 98,
            "sizeDeletions": 0
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "releasenotes/notes/share-openstack-images-4f1e3d18fdcb488b.yaml",
          "line": 8,
          "reviewer": ids["jwagantall"],
          "message": "This command needs to specify that \"os-cloud\" option is required. \nFor example:\nlftools openstack --os-cloud \u003ccloud\u003e image share ...",
          "patchSetTimestamp": 1536348809000
        },
        {
          "file": "releasenotes/notes/share-openstack-images-4f1e3d18fdcb488b.yaml",
          "line": 8,
          "reviewer": ids["jwagantall"],
          "message": "I think there is a conflict of usage messages, is it?\nFor example:\n\n(lftools-dev) jessicag@jessicag:~/linuxfoundation/lftools-dev/lftools$ lftools openstack image share --help\nUsage: lftools openstack [OPTIONS] COMMAND [ARGS]...\n\nError: Missing option \"--os-cloud\".",
          "patchSetTimestamp": 1536348809000
        }
      ]
    }
  ],
  "reviewersForOwnCommits": [
    {
      "identity": ids["lf-jenkins"],
      "approvalData": {
        "addedAsReviewerCount": 15,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    },
    {
      "identity": ids["shague"],
      "approvalData": {
        "addedAsReviewerCount": 5,
        "approvalCount": 5,
        "commentCount": 0,
        "approvals": {
          "2": 5
        }
      }
    },
    {
      "identity": ids["ecelgp"],
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
        "addedAsReviewerCount": 6,
        "approvalCount": 5,
        "commentCount": 0,
        "approvals": {
          "2": 5
        }
      }
    },
    {
      "identity": ids["jwagantall"],
      "approvalData": {
        "addedAsReviewerCount": 4,
        "approvalCount": 3,
        "commentCount": 3,
        "approvals": {
          "2": 3
        }
      }
    },
    {
      "identity": ids["jluhrsen"],
      "approvalData": {
        "addedAsReviewerCount": 2,
        "approvalCount": 1,
        "commentCount": 0,
        "approvals": {
          "2": 1
        }
      }
    }
  ],
  "repositories": {
    "releng/lftools": {
      "name": "releng/lftools",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/lftools",
      "reviewRequestors": [],
      "commitCountForUser": 12
    },
    "releng/global-jjb": {
      "name": "releng/global-jjb",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/global-jjb",
      "reviewRequestors": [],
      "commitCountForUser": 5
    }
  },
  "averageTimeInCodeReview": 518453687,
  "abandonedCommitCount": 0,
  "projects": [
    {
      "name": "releng/lftools",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/lftools",
      "reviewRequestors": [],
      "commitCountForUser": 12
    },
    {
      "name": "releng/global-jjb",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/global-jjb",
      "reviewRequestors": [],
      "commitCountForUser": 5
    }
  ],
  "selfReviewedCommitCount": 0,
  "inReviewCommitCount": 3
};